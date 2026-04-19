import { motion } from 'framer-motion';
import Image from 'next/image';
import { servicesContent } from '@/data/siteContent';

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <motion.header
          className="services__header"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="services__heading">{servicesContent.title}</h2>
        </motion.header>

        <div className="services__grid">
          {servicesContent.services.map((service, i) => (
            <motion.div
              key={service.id}
              className="services__item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
            >
              <div className="services__item-img">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                />
              </div>
              <div className="services__item-body">
                <span className="services__item-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="services__item-name">{service.title}</h3>
                <p className="services__item-desc">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
