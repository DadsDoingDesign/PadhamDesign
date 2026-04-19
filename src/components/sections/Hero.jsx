import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { heroContent, navItems } from '@/data/siteContent';

const Hero = () => {
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
    <section className="hero">
      {/* Top nav — spans full width */}
      <nav className="hnav">
        <span className="hnav__brand">PD</span>
        <ul className="hnav__list">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hnav__link">{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Split: type panel left + image panel right */}
      <div className="hero__split">
        {/* Left — wordmark + CTA */}
        <div className="hero__left">
          <motion.div
            className="hero__left-inner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero__wordmark">{heroContent.title}</h1>
            <p className="hero__descriptor">{heroContent.subtitle}</p>
            <a href={heroContent.ctaLink} className="hero__cta">
              {heroContent.ctaText}
            </a>
          </motion.div>

          {/* Press logos sit at bottom of left panel */}
          <div className="hero__press">
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
          </div>
        </div>

        {/* Right — full-bleed image */}
        <motion.div
          className="hero__right"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={heroContent.panels.left.image}
            alt={heroContent.panels.left.alt}
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
