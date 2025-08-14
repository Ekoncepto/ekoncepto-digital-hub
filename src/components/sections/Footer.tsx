import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/ekoncepto',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/ekoncepto',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.976.045-1.505.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.352-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.976.207 1.505.344 1.857.182.466.399.8.748 1.15.35.35.684.566 1.15.748.352.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/ekoncepto',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5511999999999',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.498 14.382v-.002c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.35.222-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.135-.133.298-.347.446-.52.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.516-.172-.008-.371-.01-.57-.01-.2 0-.523.074-.797.36-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.15.195 2.1 3.195 5.1 4.485.714.3 1.27.48 1.704.63.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016a9.87 9.87 0 01-5.031-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.885 9.887-9.885a9.818 9.818 0 017.022 2.9 9.821 9.821 0 012.895 7.021c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.3a11.815 11.815 0 00-8.4-3.48c-6.547 0-11.87 5.312-11.878 11.861a11.762 11.762 0 001.8 6.262l-1.208 4.383 4.5-1.166a11.78 11.78 0 005.72 1.485h.006c6.527 0 11.84-5.29 11.848-11.856a11.765 11.765 0 00-3.488-8.388z" />
        </svg>
      ),
    },
  ];

  const footerLinks = [
    {
      title: 'Navegação',
      links: [
        { name: 'Início', href: '#hero' },
        { name: 'O Mercado', href: '#mercado' },
        { name: 'Metodologia', href: '#metodologia' },
        { name: 'Cases de Sucesso', href: '#cases' },
        { name: 'Serviços', href: '#servicos' },
        { name: 'Nosso Processo', href: '#processo' },
        { name: 'Sobre Nós', href: '#about' },
      ],
    },
    {
      title: 'Contato',
      links: [
        { name: 'contato@ekoncepto.com.br', href: 'mailto:contato@ekoncepto.com.br' },
        { name: '(11) 99999-9999', href: 'tel:+5511999999999' },
        { name: 'São Paulo - SP', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand and description */}
          <div className="space-y-6">
            <motion.div
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/ekoncepto-logo branco.svg"
                alt="E-Koncepto"
                className="h-8 w-auto"
              />
            </motion.div>
            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Tecnologia e expertise para impulsionar seu e-commerce no mercado digital.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h4 className="text-white font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-brand transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Assine nossa newsletter para receber novidades e dicas.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand w-full"
                aria-label="Seu e-mail"
              />
              <button
                type="submit"
                className="bg-brand text-white px-4 py-2 rounded-r-md hover:bg-brand/90 transition-colors duration-300 font-medium"
              >
                Assinar
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright and legal */}
        <motion.div
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Ekoncepto. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-brand transition-colors duration-300"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-brand transition-colors duration-300"
            >
              Política de Privacidade
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
