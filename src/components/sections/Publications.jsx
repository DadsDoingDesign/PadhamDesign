import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { publicationsContent } from '@/data/siteContent';

const Publications = () => {
  const headerControls = useAnimation();
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (headerInView) {
      headerControls.start({ opacity: 1, y: 0 });
    }
  }, [headerInView, headerControls]);

  return (
    <section className="publications" id="publications">
      <div className="publications__container">
        <motion.header
          ref={headerRef}
          className="publications__header"
          initial={{ opacity: 0, y: 20 }}
          animate={headerControls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="publications__title">{publicationsContent.title}</h2>
        </motion.header>

        <motion.div 
          className="publications__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {publicationsContent.publications.map((publication) => (
            <Link key={publication.id} href={publication.url} target="_blank" rel="noopener noreferrer">
              <motion.article 
                className="publications__item"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6 }
                  }
                }}
              >
                <div className="publications__logo-wrapper">
                  <img 
                    src={publication.logo} 
                    alt={`${publication.id} logo`}
                    className="publications__logo"
                  />
                </div>
                <div className="publications__content">
                  <h3 className="publications__item-title">{publication.title}</h3>
                  <p className="publications__item-description">{publication.description}</p>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
