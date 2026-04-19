import { motion } from 'framer-motion';
import Image from 'next/image';
import { servicesContent } from '@/data/siteContent';

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <motion.header
          className="services__header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="services__heading">{servicesContent.title}</h2>
        </motion.header>

        <ul className="services__list">
          {servicesContent.services.map((service, i) => (
            <motion.li
              key={service.id}
              className="services__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
            >
              <div className="services__text">
                <span className="services__num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="services__copy">
                  <h3 className="services__name">{service.title}</h3>
                  <p className="services__desc">{service.description}</p>
                </div>
              </div>
              <div className="services__img-wrap">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority={i === 0}
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
