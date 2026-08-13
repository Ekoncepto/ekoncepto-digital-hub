# Configurar Google Sheets + Pixel ChatGPT Ads para o Diagnóstico

Este guia cobre:

1. **Google Sheets** — salvar todos os leads do quiz `/diagnostico`.
2. **ChatGPT Ads Pixel (data source)** — rastreamento client-side (já configurado no código).

Cada parte é independente. Configure o que precisar.

## Como funciona

```
Visitante preenche o quiz
        ↓
Site envia POST com as respostas
        ↓
Google Apps Script recebe e adiciona uma linha na planilha
        ↓
Você acessa a planilha e vê o lead em tempo real
```

---

## Passo a passo

### 1. Criar a planilha

1. Acesse [sheets.google.com](https://sheets.google.com) e clique em **Em branco**.
2. Renomeie para algo como `Leads Diagnóstico E-Koncepto`.
3. Na linha 1, adicione os cabeçalhos (um por coluna):

   | A | B | C | D | E | F | G | H | I | J | K | L |
   |---|---|---|---|---|---|---|---|---|---|---|---|
   | timestamp | origem | marketplace | faturamento | dor | objetivo | nome | whatsapp | email | referrer | userAgent | page |

   > Se você já tinha a planilha com o cabeçalho antigo (`contato` sem coluna `email`),
   > atualize: troque `contato` por `whatsapp`, adicione `email` ao lado, e
   > cole o novo script (Passo 3) + faça novo deploy (Passo 4 → New version).

### 2. Abrir o Apps Script

1. Na planilha, clique em **Extensões → Apps Script**.
2. Uma nova aba abre com um editor de código.
3. **Apague tudo** que estiver lá (`function myFunction() {...}`) e cole o script abaixo.

### 3. Colar o script

```javascript
/**
 * Recebe POSTs do quiz de diagnóstico (ekoncepto-digital-hub) e grava
 * cada envio como uma nova linha na planilha ativa.
 *
 * IMPORTANTE: o site envia os dados como JSON em Content-Type text/plain
 * (combinação necessária para funcionar cross-origin com mode:'no-cors').
 * Por isso fazemos JSON.parse(e.postData.contents) e NÃO usamos e.parameter.
 *
 * Deploy: Extensions → Apps Script → Deploy → New deployment
 *         → Web app → Execute as: Me → Who has access: Anyone
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Parse do corpo JSON (vem como text/plain por causa do CORS)
  var data;
  try {
    var raw = e.postData.contents || '{}';
    data = JSON.parse(raw);
  } catch (err) {
    // Fallback: tenta como form-urlencoded (compatibilidade)
    data = e.parameter || {};
  }

  // Honeypot: campo "_HP" invisível — se vier preenchido, é bot. Descarta.
  if (data._HP && String(data._HP).trim() !== '') {
    return ContentService.createTextOutput('ok').setMimeType(ContentService.MimeType.TEXT);
  }

  // Mapeia campos vindos do site (src/components/diagnostico/useDiagnosticoLead.ts)
  var row = [
    data._timestamp || new Date().toISOString(),
    data.source || '',
    data.marketplace || '',
    data.faturamento || '',
    data.dor || '',
    data.objetivo || '',
    data.nome || '',
    data.whatsapp || data.contato || '',
    data.email || '',
    data._referrer || '',
    data._userAgent || '',
    data._page || ''
  ];

  sheet.appendRow(row);

  // Resposta leve — o site usa mode:'no-cors', então não lê o corpo.
  return ContentService.createTextOutput('ok').setMimeType(ContentService.MimeType.TEXT);
}

/** Teste manual: roda no editor para validar gravação. */
function testInsert() {
  var fakeEvent = {
    postData: { contents: JSON.stringify({
      _timestamp: new Date().toISOString(),
      source: 'test',
      marketplace: 'shopee',
      faturamento: '10k-50k',
      dor: 'escalar',
      objetivo: 'escalar',
      nome: 'Teste Manual',
      whatsapp: '(11) 99999-9999',
      email: ''
    }) }
  };
  doPost(fakeEvent);
}
```

### 4. Salvar e fazer o deploy

1. Clique no ícone de **salvar** (ou `Ctrl+S`).
2. Clique em **Deploy → New deployment** (Implantar → Nova implantação).
3. Ao lado de "Select type", escolha **Web app**.
4. Preencha:
   - **Description**: `Leads Diagnóstico`
   - **Execute as**: **Me (seu email)**
   - **Who has access**: **Anyone** (qualquer pessoa — necessário para o site conseguir enviar)
5. Clique em **Deploy**.
6. Na primeira vez, o Google vai pedir autorizações — clique em **Authorize access** e aprova.

### 5. Copiar a URL do webhook

Após o deploy, aparece um popup com **"Web app URL"**, algo como:

```
https://script.google.com/macros/s/AKfycby.../exec
```

**Copie essa URL.**

### 6. Configurar no projeto

Na **raiz** do projeto, crie (ou edite) o arquivo `.env` e adicione:

```bash
VITE_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycby.../exec
```

> ⚠️ **Importante:** reinicie o `npm run dev` após mudar o `.env` (o Vite carrega variáveis de ambiente só no startup).

### 7. Testar

1. Rode o site localmente: `npm run dev`
2. Acesse `http://localhost:4321/diagnostico`
3. Preencha o quiz
4. Volte na planilha — uma nova linha deve aparecer em ~2 segundos

---

## Colunas da planilha (referência)

| Coluna | Campo | Exemplo |
|---|---|---|
| A | timestamp | `2026-08-13T14:32:01.234Z` |
| B | origem (`source`) | `hero`, `shopee-contact`, `header`... |
| C | marketplace | `mercado-livre`, `amazon`, `shopee`, `multi`, `nenhum` |
| D | faturamento | `ate-10k`, `10k-50k`, `50k-100k`, `100k-500k`, `500k+` |
| E | dor | `nao-vende`, `vende-pouco`, `margem`, `escalar`, `tempo` |
| F | objetivo | `comecar`, `otimizar`, `escalar`, `profissionalizar` |
| G | nome | `João Silva` |
| H | whatsapp | `(11) 99999-9999` |
| I | email | `joao@email.com` (pode ser vazio) |
| J | referrer | URL de onde veio |
| K | userAgent | navegador/dispositivo |
| L | page | `/diagnostico` |

---

## Problemas comuns

**A linha não aparece na planilha**
- Verifique se o `.env` tem a URL correta e reiniciou o dev server.
- Abra o Console do navegador (F12) ao enviar o quiz — se houver erro, aparece ali.
- No Apps Script, vá em **Executions** (menu esquerdo) pra ver se houve chamada e o erro específico.

**Erro de CORS no console**
- É normal. O site usa `mode: 'no-cors'` que esconde a resposta, mas o POST é feito.
- O importante é a linha aparecer na planilha.

**"Anyone" access exige verificação do Google**
- Apps Script novo às vezes pede verificação pra "Anyone". Como é só gravar dados em planilha sua (não lê dados sensíveis de usuários Google), pode aprovar. Alternativa: use Google Forms (mas perde a personalização do quiz).

---

# Parte 2 — ChatGPT Ads Pixel (data source)

**Status:** já configurado no código. Não precisa fazer nada. ✅

O pixel da OpenAI/ChatGPT (`oaiq`) está no `src/layouts/Layout.astro` e dispara o evento `lead_created` automaticamente quando alguém completa o quiz (tanto via formulário quando via chat proativo).

### Como testar se está funcionando

1. Abra seu site no navegador.
2. Pressione `F12` → aba **Network** (Rede).
3. Filtre por `bzrcdn` ou `bzr.openai`.
4. Complete o quiz.
5. Você deve ver requisições POST indo pra `bzr.openai.com`.

### Para depurar (debug mode)

Se quiser ver logs detalhados no console, edite `src/layouts/Layout.astro` e adicione `debug:true` na inicialização:

```js
oaiq("init",{pixelId:"AgiDgZnWtjunATVSmfSNh8",debug:true});
```

⚠️ Lembre de remover o `debug:true` antes de ir pra produção.

---

# Variáveis de ambiente — resumo

Para o diagnóstico funcionar, configure no Netlify (e opcionalmente no `.env` local):

| Variável | Onde | Obrigatória? | Para quê |
|---|---|---|---|
| `VITE_GOOGLE_SHEETS_WEBHOOK_URL` | Netlify + `.env` | Sim (lead storage) | Salvar leads no Sheets |

> O Pixel do ChatGPT Ads é estático (hardcoded com `AgiDgZnWtjunATVSmfSNh8` em `src/layouts/Layout.astro`) e não precisa de variável de ambiente.

## E se eu quiser Conversions API (CAPI) depois?

A CAPI (conversões server-to-server, mais resiliente a ad blockers) não está habilitada agora, mas o evento `lead_created` do pixel client-side já cobre a maioria das conversões. Se no futuro você quiser adicionar CAPI:
- Procure a **Conversions API Key** no portal de ads da OpenAI (não confunda com a `sk-` de API do ChatGPT — são coisas diferentes).
- Crie uma Netlify Function que faça o POST pra `https://bzr.openai.com/v1/events` com a key no header `Authorization: Bearer ...`.
- ⚠️ **Nunca coloque chaves secretas em código frontend ou Git** — só em variáveis de ambiente do servidor.

## Atualizar o script depois

Se você mudar algo no código do Apps Script, precisa fazer **Deploy → Manage deployments → Edit → Version: New version** para a mudança ir pro ar.
