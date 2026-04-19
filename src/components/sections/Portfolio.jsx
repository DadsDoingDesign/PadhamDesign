import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';

export default function Portfolio() {
  const [active, setActive] = useState(null);

  const enter = useCallback((proj) => setActive(proj), []);
  const leave = useCallback(() => setActive(null), []);

  return (
    <section className="portfolio" id="portfolio">
      {/* Background reveal — right half fills with hovered project image */}
      <div className="portfolio__bg" aria-hidden="true">
        <AnimatePresence mode="sync">
          {active && (
            <motion.div
              key={active.slug}
              className="portfolio__bg-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            >
              <Image
                src={active.images.featured}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
                sizes="50vw"
              />
              <div className="portfolio__bg-scrim" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="portfolio__inner">
        <motion.header
          className="portfolio__header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="portfolio__eyebrow">Selected Works</span>
          <h2 className="portfolio__heading">Portfolio</h2>
        </motion.header>

        <ul className="portfolio__list" role="list">
          {projects.map((project, i) => (
            <motion.li
              key={project.slug}
              className={`portfolio__item${active?.slug === project.slug ? ' portfolio__item--active' : ''}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onMouseEnter={() => enter(project)}
              onMouseLeave={leave}
            >
              <Link href={`/projects/${project.slug}`} className="portfolio__link" data-cursor="view">
                <span className="portfolio__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="portfolio__text">
                  <h3 className="portfolio__title">{project.title}</h3>
                  <p className="portfolio__location">{project.location}</p>
                </div>
                <span className="portfolio__cta" aria-hidden="true">
                  View
                  <span className="portfolio__arrow">→</span>
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
