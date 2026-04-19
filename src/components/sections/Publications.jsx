import { useRef } from 'react';
import { motion } from 'framer-motion';
import { publicationsContent } from '@/data/siteContent';

const Publications = () => {
  const logoStripRef = useRef(null);

  const onMouseMove = (e) => {
    const rect = logoStripRef.current?.getBoundingClientRect();
    if (!rect) return;
    logoStripRef.current.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    logoStripRef.current.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <section className="pubs" id="publications">
      <div className="pubs__title-area">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="pubs__eyebrow">Press &amp; Recognition</span>
          <h2 className="pubs__heading">{publicationsContent.title}</h2>
        </motion.div>
      </div>

      <div className="pubs__body">
        <div className="pubs__inner">
          <motion.div
            className="pubs__logos"
            ref={logoStripRef}
            onMouseMove={onMouseMove}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            {publicationsContent.publications.map((pub) => (
              <a
                key={pub.id}
                href={pub.url}
                className="pubs__logo-cell"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={pub.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pub.logo} alt={pub.name} className="pubs__logo" />
              </a>
            ))}
          </motion.div>

          <div className="pubs__grid">
            {publicationsContent.publications.map((pub, i) => (
              <motion.a
                key={pub.id}
                href={pub.url}
                className="pubs__item"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.09 }}
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
};

export default Publications;
