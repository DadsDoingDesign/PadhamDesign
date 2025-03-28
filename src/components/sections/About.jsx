import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { aboutContent } from '@/data/siteContent';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="about">
      <div className="about__container container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="about__content"
        >
          <motion.h2 variants={itemVariants} className="about__title">{aboutContent.title}</motion.h2>
          <div className="about__grid">
            <div className="about__image-wrapper">
              <Image 
                src={aboutContent.image} 
                alt={aboutContent.alt} 
                fill
                style={{ 
                  objectFit: 'cover', 
                  width: '100%',
                  height: '100%'
                }}
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
            </div>
            <div className="about__text-content">
              <motion.h3 variants={itemVariants} className="about__name">{aboutContent.name}</motion.h3>
              <motion.div variants={itemVariants} className="about__bio">
                <p className="about__description">
                  {aboutContent.bio.description}
                </p>
                <p className="about__experience">
                  {aboutContent.bio.experience}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
