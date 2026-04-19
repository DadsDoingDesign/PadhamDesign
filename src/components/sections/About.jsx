import { motion } from 'framer-motion';
import Image from 'next/image';
import { aboutContent } from '@/data/siteContent';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const About = () => (
  <section id="about" className="about">
    <div className="about__inner">
      <motion.header
        className="about__header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="about__heading">{aboutContent.title}</h2>
      </motion.header>

      <div className="about__grid">
        <motion.div
          className="about__img-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.h3 variants={fadeUp} className="about__name">
            {aboutContent.name}
          </motion.h3>
          <motion.div variants={fadeUp} className="about__rule" />
          <motion.div variants={fadeUp} className="about__bio">
            <p className="about__description">{aboutContent.bio.description}</p>
            <p className="about__experience">{aboutContent.bio.experience}</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
