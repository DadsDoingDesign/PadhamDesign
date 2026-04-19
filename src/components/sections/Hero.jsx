import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { heroContent, navItems } from '@/data/siteContent';

const Hero = () => {
  useEffect(() => {
    const handleScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (!href?.startsWith('#')) return;
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const links = document.querySelectorAll('.hero-nav__link');
    links.forEach(l => l.addEventListener('click', handleScroll));
    return () => links.forEach(l => l.removeEventListener('click', handleScroll));
  }, []);

  return (
    <section className="hero">
      {/* Nav */}
      <nav className="hero-nav">
        <ul className="hero-nav__list">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hero-nav__link">{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Full-bleed image */}
      <div className="hero__image">
        <Image
          src={heroContent.panels.center.image}
          alt={heroContent.panels.center.alt}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="hero__scrim" />
      </div>

      {/* Centered wordmark */}
      <div className="hero__body">
        <motion.h1
          className="hero__wordmark"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          {heroContent.title}
        </motion.h1>
        <motion.p
          className="hero__sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {heroContent.subtitle}
        </motion.p>
        <motion.a
          href={heroContent.ctaLink}
          className="hero__cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {heroContent.ctaText}
        </motion.a>
      </div>

      {/* Publications strip */}
      <div className="hero__press">
        <span className="hero__press-label">As seen in</span>
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
    </section>
  );
};

export default Hero;
