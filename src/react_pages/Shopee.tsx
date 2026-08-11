import React from 'react';
import HeaderShopee from '@/components/sections/shopee/HeaderShopee';
import HeroShopee from '@/components/sections/shopee/HeroShopee';
import CasesShopee from '@/components/sections/shopee/CasesShopee';
import ServicesShopee from '@/components/sections/shopee/ServicesShopee';
import ContactShopee from '@/components/sections/shopee/ContactShopee';
import { Footer } from '@/components/sections/Footer';

/**
 * /shopee — dedicated landing page for traffic from the Shopee popup.
 *
 * Audience: active Shopee sellers coming from inside the Shopee platform.
 * Strategy: short, visual, Shopee-branded (orange/yellow), direct to
 * WhatsApp. No Methodology/Process/About/FAQ — popup traffic has low
 * intent and needs a fast path to the offer.
 *
 * The .shopee-theme wrapper (set in shopee.astro around this component)
 * recolors the CSS custom property --primary to Shopee orange, so every
 * component using bg-primary/text-primary inherits the brand color
 * automatically without code changes inside each component.
 */
const Shopee = () => {
  return (
    <>
      <HeaderShopee />

      <main>
        <HeroShopee />
        <CasesShopee />
        <ServicesShopee />
        <ContactShopee />
      </main>

      <Footer />
    </>
  );
};

export default Shopee;
