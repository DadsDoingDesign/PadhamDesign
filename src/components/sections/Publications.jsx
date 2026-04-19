import { motion } from 'framer-motion';
import { publicationsContent } from '@/data/siteContent';

const Publications = () => (
  <section className="publications" id="publications">
    <div className="publications__inner">
      <motion.header
        className="publications__header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="publications__heading">{publicationsContent.title}</h2>
      </motion.header>

      <ul className="publications__list">
        {publicationsContent.publications.map((pub, i) => (
          <motion.li
            key={pub.id}
            className="publications__item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <div className="publications__logo-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={pub.logo} alt={pub.id} className="publications__logo" />
            </div>
            <div className="publications__body">
              <p className="publications__quote">{pub.description}</p>
              <span className="publications__source">{pub.title}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default Publications;
