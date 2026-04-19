import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

// Import the scroll animation utility
import { useFadeInOnScroll, useStaggeredFadeIn, fadeInVariants } from '@/utils/effects/scrollAnimation';

// Import projectsData from projects.js
import projects from '@/data/projects';

const Portfolio = () => {
  // Use the fade in on scroll hook for the header
  const { ref: headerRef, controls: headerControls, variants: headerVariants } = useFadeInOnScroll(0.1);

  // Updated container variants with faster transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.075, // Reduced from 0.1
        delayChildren: 0.2, // Reduced from 0.3
      },
    },
  };

  // Use the new fade in variants
  const itemVariants = fadeInVariants;

  // Pre-create all animation refs and controls before rendering
  const itemAnimations = projects.map((_, index) => {
    return useStaggeredFadeIn(index, 3, 0.15); // 3 items per row
  });

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__container">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={headerVariants}
          className="portfolio__header"
        >
          <h2 className="portfolio__title">Portfolio Works</h2>
        </motion.div>

        <motion.div
          className="portfolio__grid"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {projects.map((project, index) => {
            const { ref, controls } = itemAnimations[index];
            
            return (
              <motion.div
                key={project.slug}
                ref={ref}
                initial={{ opacity: 0 }}
                animate={controls}
                className="portfolio__item"
              >
                <Link href={`/projects/${project.slug}`} className="portfolio__link">
                  <div className="portfolio__image-inner">
                    <Image
                      src={project.images.featured}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                    />
                  </div>
                  <div className="portfolio__caption">
                    <h3 className="portfolio__project-title">{project.title}</h3>
                    <p className="portfolio__project-location">{project.location}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
