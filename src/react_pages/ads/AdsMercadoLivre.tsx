/**
 * LP de Google Ads — Mercado Livre.
 * Tema amarelo ML (#FFE600). Converte pro /diagnostico.
 */
import AdsLP from '@/components/sections/ads/AdsLP';
import { ADS_LPS } from '@/config/ads-lp';

export default function AdsMercadoLivre() {
  return <AdsLP config={ADS_LPS['mercado-livre']} />;
}
