import { motion } from 'framer-motion';
import Image from 'next/image';
import { aboutContent } from '@/data/siteContent';

const About = () => (
  <section id="about" className="about">
    <div className="about__inner">
      <motion.header
        className="about__header"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="about__heading">{aboutContent.title}</h2>
      </motion.header>

      <div className="about__layout">
        <motion.div
          className="about__portrait"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image
            src={aboutContent.image}
            alt={aboutContent.alt}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 45vw"
            priority
          />
        </motion.div>

        <motion.div
          className="about__text"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <h3 className="about__name">{aboutContent.name}</h3>
          <p className="about__bio">{aboutContent.bio.description}</p>
          <p className="about__bio">{aboutContent.bio.experience}</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
