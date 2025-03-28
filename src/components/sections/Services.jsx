import React, { useEffect } from 'react';
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
        >
          {servicesContent.title}
        </motion.h2>
      </div>
      
      <div className="services__grid">
        {servicesContent.services.map((service, index) => (
          <React.Fragment key={service.id}>
            <motion.div 
              className="services__content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="services__item-title">{service.title}</h3>
              <p className="services__item-description">{service.description}</p>
            </motion.div>
            
            <motion.div
              className="services__image-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                className="services__image"
                width={1200}
                height={800}
                priority={index === 0}
                style={{ 
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }}
                sizes="(max-width: 768px) 100vw, 55vw"
                quality={95}
              />
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
