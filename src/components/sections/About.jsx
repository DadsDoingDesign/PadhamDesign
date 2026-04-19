import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { aboutContent } from '@/data/siteContent';

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about__inner">
        <motion.header
          className="about__header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="about__eyebrow">The Designer</span>
          <h2 className="about__heading">{aboutContent.title}</h2>
        </motion.header>

        <div className="about__layout">
          <motion.div
            className="about__portrait"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div className="about__portrait-inner" style={{ y: imageY }}>
              <Image
                src={aboutContent.image}
                alt={aboutContent.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="about__text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="about__name">{aboutContent.name}</h3>
            <p className="about__bio">{aboutContent.bio.description}</p>
            <p className="about__bio">{aboutContent.bio.experience}</p>

            <div className="about__values">
              {aboutContent.values.map((value, i) => (
                <motion.div
                  key={value.title}
                  className="about__value"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <p className="about__value-title">{value.title}</p>
                  <p className="about__value-desc">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
