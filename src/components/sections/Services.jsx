import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { servicesContent } from '@/data/siteContent';

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__header">
        <motion.h2
          className="services__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {servicesContent.title}
        </motion.h2>
      </div>

      <div className="services__grid">
        {servicesContent.services.map((service, index) => (
          <motion.div
            key={service.id}
            className="services__row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="services__content">
              <span className="services__service-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="services__item-title">{service.title}</h3>
              <p className="services__item-description">{service.description}</p>
            </div>

            <div className="services__image-container">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="services__image"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
