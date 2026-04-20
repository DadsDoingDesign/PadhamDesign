import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { heroContent, navItems } from '@/data/siteContent';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  useEffect(() => {
    const onClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (!href?.startsWith('#')) return;
      e.preventDefault();
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    };
    const links = document.querySelectorAll('.hnav__link');
    links.forEach(l => l.addEventListener('click', onClick));
    return () => links.forEach(l => l.removeEventListener('click', onClick));
  }, []);

  return (
    <section className="hero" ref={containerRef}>
      {/* Full-bleed parallax image */}
      <motion.div
        className="hero__bg"
        style={{ y: imageY }}
        initial={{ opacity: 0, scale: 1.07 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={heroContent.panels.left.image}
          alt={heroContent.panels.left.alt}
          fill
          priority
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient scrims */}
      <div className="hero__scrim" aria-hidden="true" />

      {/* Floating nav */}
      <nav className="hnav">
        <motion.span
          className="hnav__brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          PD
        </motion.span>
        <ul className="hnav__list">
          {navItems.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href={item.href} className="hnav__link">{item.label}</a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Wordmark — bottom-left */}
      <motion.div className="hero__content" style={{ y: contentY }}>
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Interior Design · San Francisco
        </motion.p>

        <h1 className="hero__wordmark" aria-label={heroContent.title}>
          <motion.span
            className="hero__wordmark-line"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          >
            Padham
          </motion.span>
          <motion.span
            className="hero__wordmark-line"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.76 }}
          >
            Design
          </motion.span>
        </h1>

        <motion.div
          className="hero__divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 1.15 }}
        />

        <motion.div
          className="hero__sub-group"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 1.3 }}
        >
          <p className="hero__descriptor">{heroContent.subtitle}</p>
          <a href={heroContent.ctaLink} className="hero__cta">
            {heroContent.ctaText}
            <span className="hero__cta-arrow" aria-hidden="true">→</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Press — bottom right */}
      <motion.div
        className="hero__press"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.7 }}
        aria-hidden="true"
      >
        <p className="hero__press-label">As seen in</p>
        <div className="hero__press-logos">
          {heroContent.publications.map((pub) => (
            <div key={pub.name} className="hero__press-logo">
              <Image
                src={pub.image}
                alt=""
                width={pub.width}
                height={pub.height}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
