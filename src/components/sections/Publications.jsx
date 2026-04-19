import { motion } from 'framer-motion';
import { publicationsContent } from '@/data/siteContent';

const Publications = () => (
  <section className="pubs" id="publications">
    {/* Title on light background */}
    <motion.div
      className="pubs__title-area"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="pubs__heading">{publicationsContent.title}</h2>
    </motion.div>

    {/* Dark inverted body */}
    <div className="pubs__body">
      <div className="pubs__inner">

        {/* Large logo strip — the recognition anchors */}
        <motion.div
          className="pubs__logos"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {publicationsContent.publications.map((pub) => (
            <a
              key={pub.id}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pubs__logo-cell"
              aria-label={pub.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={pub.logo} alt={pub.name} className="pubs__logo" />
            </a>
          ))}
        </motion.div>

        {/* Pull-quote grid */}
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
              <p className="pubs__pub-name">{pub.name}</p>
              <blockquote className="pubs__quote">{pub.description}</blockquote>
              <p className="pubs__article-title">{pub.title}</p>
            </motion.a>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default Publications;
