import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesContent } from '@/data/siteContent';

export default function Services() {
  const [open, setOpen] = useState(null);

  return (
    <section id="services" className="services">
      <div className="services__inner">
        <motion.header
          className="services__header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="services__eyebrow">Services Offered</span>
          <h2 className="services__heading">{servicesContent.title}</h2>
        </motion.header>

        <div className="services__list">
          {servicesContent.services.map((service, i) => {
            const isOpen = open === service.id;
            return (
              <motion.div
                key={service.id}
                className={`services__item${isOpen ? ' services__item--open' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <button
                  className="services__toggle"
                  onClick={() => setOpen(isOpen ? null : service.id)}
                  aria-expanded={isOpen}
                >
                  <span className="services__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="services__title">{service.title}</h3>
                  <span className="services__icon" aria-hidden="true">
                    <span className="services__icon-bar" />
                    <span className={`services__icon-bar services__icon-bar--v${isOpen ? ' services__icon-bar--hidden' : ''}`} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={service.id}
                      className="services__body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="services__desc">{service.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
