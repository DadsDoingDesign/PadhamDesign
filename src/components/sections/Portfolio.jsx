import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';

const Portfolio = () => (
  <section className="portfolio" id="portfolio">
    <div className="portfolio__inner">
      <motion.header
        className="portfolio__header"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="portfolio__heading">Portfolio Works</h2>
      </motion.header>

      <div className="portfolio__rows">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            className="portfolio__row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <Link href={`/projects/${project.slug}`} className="portfolio__row-link">
              {/* Index number */}
              <span className="portfolio__index">{String(i + 1).padStart(2, '0')}</span>

              {/* Image */}
              <div className="portfolio__img-wrap">
                <Image
                  src={project.images.featured}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>

              {/* Meta */}
              <div className="portfolio__meta">
                <h3 className="portfolio__title">{project.title}</h3>
                <p className="portfolio__location">{project.location}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
