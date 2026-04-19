import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const Portfolio = () => (
  <section className="portfolio" id="portfolio">
    <div className="portfolio__inner">
      <motion.header
        className="portfolio__header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="portfolio__heading">Portfolio Works</h2>
      </motion.header>

      <div className="portfolio__grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            className="portfolio__item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] } } }}
          >
            <Link href={`/projects/${project.slug}`} className="portfolio__link">
              <div className="portfolio__img-wrap">
                <Image
                  src={project.images.featured}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="portfolio__meta">
                <span className="portfolio__title">{project.title}</span>
                <span className="portfolio__location">{project.location}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
