import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { servicesContent } from '@/data/siteContent';

export default function Services() {
  const [hovered, setHovered] = useState(servicesContent.services[0].id);
  const active = servicesContent.services.find(s => s.id === hovered) || servicesContent.services[0];

  return (
    <section id="services" className="services">
      <div className="services__layout">
        {/* Left: header + always-visible list */}
        <div className="services__left">
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
            {servicesContent.services.map((service, i) => (
              <motion.div
                key={service.id}
                className={`services__item${hovered === service.id ? ' services__item--active' : ''}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHovered(service.id)}
              >
                <span className="services__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="services__content">
                  <h3 className="services__title">{service.title}</h3>
                  <p className="services__desc">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: image panel — ambient, changes on hover */}
        <div className="services__panel" aria-hidden="true">
          <AnimatePresence mode="sync">
            <motion.div
              key={active.id}
              className="services__panel-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
            >
              <Image
                src={active.image}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 0px, 45vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
