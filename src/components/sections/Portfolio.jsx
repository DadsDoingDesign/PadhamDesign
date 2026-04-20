import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__header-area">
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
      </div>

      <div className="portfolio__grid">
        {projects.map((project, i) => (
          <motion.article
            key={project.slug}
            className={`portfolio__card${i === 0 ? ' portfolio__card--featured' : ''}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: Math.min(i * 0.07, 0.35), ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={`/projects/${project.slug}`} className="portfolio__card-link" data-cursor="view">
              <div className="portfolio__card-media">
                <Image
                  src={project.images.featured}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 660px"
                />
              </div>
              <div className="portfolio__card-overlay">
                <div className="portfolio__card-info">
                  <span className="portfolio__card-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="portfolio__card-title">{project.title}</h3>
                  <p className="portfolio__card-location">{project.location}</p>
                </div>
                <span className="portfolio__card-cta" aria-hidden="true">View Project →</span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
