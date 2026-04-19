import { motion } from 'framer-motion';
import { publicationsContent } from '@/data/siteContent';

const Publications = () => (
  <section className="pubs" id="publications">
    <div className="pubs__inner">
      <motion.header
        className="pubs__header"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="pubs__heading">{publicationsContent.title}</h2>
      </motion.header>

      <div className="pubs__grid">
        {publicationsContent.publications.map((pub, i) => (
          <motion.a
            key={pub.id}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pubs__item"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <div className="pubs__logo-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={pub.logo} alt={pub.id} className="pubs__logo" />
            </div>
            <blockquote className="pubs__quote">{pub.description}</blockquote>
            <p className="pubs__title">{pub.title}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Publications;
