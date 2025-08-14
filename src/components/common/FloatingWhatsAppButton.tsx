import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { externalLinks } from '@/config/site';

const FloatingWhatsAppButton = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={externalLinks.whatsapp} target="_blank" rel="noopener noreferrer">
        <Button
          size="lg"
          className="rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white w-16 h-16 flex items-center justify-center"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </a>
    </motion.div>
  );
};

export default FloatingWhatsAppButton;
