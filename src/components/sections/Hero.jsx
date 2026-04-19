import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { heroContent, navItems } from '@/data/siteContent';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

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
      <nav className="hnav">
        <motion.span
          className="hnav__brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          PD
        </motion.span>
        <ul className="hnav__list">
          {navItems.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href={item.href} className="hnav__link">{item.label}</a>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="hero__split">
        {/* Left — typography */}
        <div className="hero__left">
          <div className="hero__left-inner">
            <motion.p
              className="hero__eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Interior Design · San Francisco
            </motion.p>

            <h1 className="hero__wordmark" aria-label={heroContent.title}>
              <div className="hero__wordmark-row">
                <div className="hero__wordmark-clip">
                  <motion.span
                    initial={{ y: '105%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                  >
                    Padham
                  </motion.span>
                </div>
              </div>
              <div className="hero__wordmark-row">
                <div className="hero__wordmark-clip">
                  <motion.span
                    initial={{ y: '105%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
                  >
                    Design
                  </motion.span>
                </div>
              </div>
            </h1>

            <motion.div
              className="hero__divider"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
            />

            <motion.div
              className="hero__sub-group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
            >
              <p className="hero__descriptor">{heroContent.subtitle}</p>
              <a href={heroContent.ctaLink} className="hero__cta">
                {heroContent.ctaText}
                <span className="hero__cta-arrow" aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero__press"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 1.4 }}
          >
            <p className="hero__press-label">As seen in</p>
            <div className="hero__press-logos">
              {heroContent.publications.map((pub) => (
                <div key={pub.name} className="hero__press-logo">
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
          </motion.div>
        </div>

        {/* Right — image with parallax */}
        <div className="hero__right" data-cursor="view">
          <motion.div
            className="hero__right-inner"
            style={{ y: imageY }}
            initial={{ clipPath: 'inset(0 0 100% 0)', scale: 1.06 }}
            animate={{ clipPath: 'inset(0 0 0% 0)', scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            <Image
              src={heroContent.panels.left.image}
              alt={heroContent.panels.left.alt}
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
          <div className="hero__right-overlay" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
