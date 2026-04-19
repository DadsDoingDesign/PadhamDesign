import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { heroContent, navItems } from '@/data/siteContent';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      e.preventDefault();
      const targetEl = document.getElementById(href.replace('#', ''));
      if (targetEl) {
        const offset = targetEl.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    };
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => link.addEventListener('click', handleSmoothScroll));
    return () => navLinks.forEach(link => link.removeEventListener('click', handleSmoothScroll));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.4 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section className="hero">
      <nav className="hero__nav">
        <ul className="nav__list">
          {navItems.map((item, index) => (
            <li key={index} className="nav__item">
              <a href={item.href} className="nav__link">{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hero__panels">
        <div className="hero__panel hero__panel--left">
          <div className="hero__panel-inner">
            <Image
              src={heroContent.panels.left.image}
              alt={heroContent.panels.left.alt}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
        <div className="hero__panel hero__panel--center">
          <div className="hero__panel-inner">
            <Image
              src={heroContent.panels.center.image}
              alt={heroContent.panels.center.alt}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
        <div className="hero__panel hero__panel--right">
          <div className="hero__panel-inner">
            <Image
              src={heroContent.panels.right.image}
              alt={heroContent.panels.right.alt}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="hero__overlay"
      >
        <motion.h1 variants={itemVariants} className="hero__title">
          {heroContent.title}
        </motion.h1>
        <motion.p variants={itemVariants} className="hero__subtitle">
          {heroContent.subtitle}
        </motion.p>
        <motion.div variants={itemVariants}>
          <a href={heroContent.ctaLink} className="hero__cta">
            {heroContent.ctaText}
          </a>
        </motion.div>
      </motion.div>

      <div className="hero__publications-bar">
        <span className="hero__publications-label">As seen in</span>
        <div className="hero__publications-logos">
          {heroContent.publications.map((pub, index) => (
            <div key={index} className="hero__publication-logo">
              <Image
                src={pub.image}
                alt={pub.alt}
                width={pub.width}
                height={pub.height}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
