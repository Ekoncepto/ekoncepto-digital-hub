/**
 * LP de Google Ads — Amazon.
 * Tema laranja Amazon (#FF9900). Converte pro /diagnostico.
 */
import AdsLP from '@/components/sections/ads/AdsLP';
import { ADS_LPS } from '@/config/ads-lp';

export default function AdsAmazon() {
  return <AdsLP config={ADS_LPS['amazon']} />;
}
