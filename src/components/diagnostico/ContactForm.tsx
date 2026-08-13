/**
 * Bloco final de identificação — tela única com campos claros.
 *
 * Diferente das perguntas de múltipla escolha (1 por tela), aqui mostramos
 * nome + WhatsApp + email JUNTOS num formulário tradicional, porque:
 *  - São dados de natureza diferente (não há "opções" pra escolher).
 *  - O usuário espera preencher um formulário de contato, não responder quiz.
 *  - Mobile: inputs com inputMode certo abrem o teclado correto (tel/email).
 *
 * WhatsApp e nome são obrigatórios; email é opcional.
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { CONTACT_FIELDS } from '@/config/diagnostico-quiz';
import { validateField } from './useDiagnosticoLead';

type Errors = Partial<Record<string, string>>;

interface ContactFormProps {
  initial: Record<string, string>;
  onSubmit: (values: Record<string, string>) => void | Promise<void>;
  submitting: boolean;
}

export default function ContactForm({
  initial,
  onSubmit,
  submitting,
}: ContactFormProps) {
  const [values, setValues] = useState<Record<string, string>>({
    nome: initial.nome ?? '',
    whatsapp: initial.whatsapp ?? '',
    email: initial.email ?? '',
  });
  const [errors, setErrors] = useState<Errors>({});

  function setField(id: string, val: string) {
    setValues((v) => ({ ...v, [id]: val }));
    // limpa erro do campo enquanto digita
    if (errors[id]) setErrors((e) => ({ ...e, [id]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // valida todos os campos
    const newErrors: Errors = {};
    for (const f of CONTACT_FIELDS) {
      const err = validateField(f.id, values[f.id] ?? '', f.required);
      if (err) newErrors[f.id] = err;
    }
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    onSubmit(values);
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-5"
      noValidate
    >
      {CONTACT_FIELDS.map((f) => (
        <div key={f.id} className="space-y-1.5">
          <Label htmlFor={f.id} className="text-sm font-medium">
            {f.label}
          </Label>
          <Input
            id={f.id}
            // autoFocus no primeiro campo (nome) pra abrir teclado no mobile
            autoFocus={f.id === 'nome'}
            type={f.inputMode === 'email' ? 'email' : 'text'}
            inputMode={f.inputMode}
            placeholder={f.placeholder}
            value={values[f.id] ?? ''}
            onChange={(e) => setField(f.id, e.target.value)}
            autoComplete={
              f.id === 'nome'
                ? 'name'
                : f.id === 'whatsapp'
                  ? 'tel'
                  : 'email'
            }
            aria-invalid={!!errors[f.id]}
            className={cn(
              'h-12 text-base',
              errors[f.id] &&
                'border-destructive focus-visible:ring-destructive'
            )}
          />
          {errors[f.id] && (
            <p className="text-xs text-destructive">{errors[f.id]}</p>
          )}
        </div>
      ))}

      <Button
        type="submit"
        size="lg"
        variant="hero"
        className="w-full h-12 text-base"
        disabled={submitting}
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Preparando seu diagnóstico...
          </>
        ) : (
          <>
            Ver meu diagnóstico
            <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>

      <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <Lock className="w-3 h-3" aria-hidden />
        Seus dados são protegidos. Sem spam.
      </p>
    </motion.form>
  );
}
