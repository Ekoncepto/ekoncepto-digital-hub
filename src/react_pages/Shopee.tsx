import React from 'react';
import HeroShopee from '@/components/sections/shopee/HeroShopee';
import CasesShopee from '@/components/sections/shopee/CasesShopee';
import ServicesShopee from '@/components/sections/shopee/ServicesShopee';
import ContactShopee from '@/components/sections/shopee/ContactShopee';
import { FoundersGridLp } from '@/components/sections/lp/FoundersGridLp';
import { Footer } from '@/components/sections/Footer';

/**
 * /shopee — dedicated landing page for traffic from the Shopee popup.
 *
 * Audience: active Shopee sellers coming from inside the Shopee platform.
 * Strategy: short, visual, Shopee-branded (orange/yellow), direct to
 * WhatsApp. No full header (logo lives inside the Hero), no nav — the
 * page is short enough to scroll, and the global FloatingWhatsAppButton
 * keeps the CTA reachable from anywhere. Founders shown side-by-side
 * (grid) so sellers see who they'll talk to.
 *
 * The .shopee-theme wrapper (set in shopee.astro around this component)
 * recolors the CSS custom property --primary to Shopee orange, so every
 * component using bg-primary/text-primary inherits the brand color
 * automatically without code changes inside each component.
 */
const Shopee = () => {
  return (
    <>
      <main>
        <HeroShopee />
        <CasesShopee />
        <ServicesShopee />
        <FoundersGridLp />
        <ContactShopee />
      </main>

      <Footer />
    </>
  );
};

export default Shopee;
