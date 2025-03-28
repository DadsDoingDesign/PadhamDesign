import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { heroContent, navItems } from '@/data/siteContent';

const Hero = () => {
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

  // Handle smooth scrolling for navigation links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      // Only process links that start with #
      const href = e.currentTarget.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Get any header offset (if you have a fixed header)
        const headerOffset = 80; // Adjust based on your header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };
    
    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });
    
    // Clean up event listeners on component unmount
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

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
    <section className="hero">
      {/* Removed the overlay div that was making panels darker */}
      <nav className="hero__nav">
        <ul className="nav__list">
          {navItems.map((item, index) => (
            <li key={index} className="nav__item">
              <a href={item.href} className="nav__link">{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="hero__container container">
        <div className="hero__panels">
          <div className="panel panel--left">
            <div className="panel__container">
              <div className="panel__image-wrapper">
                <Image 
                  src={heroContent.panels.left.image} 
                  alt={heroContent.panels.left.alt} 
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="panel panel--center">
            <div className="panel__container">
              <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="content"
              >
                <motion.h1 variants={itemVariants} className="title h1">{heroContent.title}</motion.h1>
                <motion.h3 variants={itemVariants} className="subtitle h3">{heroContent.subtitle}</motion.h3>
                <motion.div variants={itemVariants}>
                  <a href={heroContent.ctaLink} className="button button--secondary button-text">{heroContent.ctaText}</a>
                </motion.div>
              </motion.div>
              
              <div className="panel__image-content-wrapper">
                <div className="panel__image-wrapper">
                  <Image 
                    src={heroContent.panels.center.image} 
                    alt={heroContent.panels.center.alt} 
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                <div className="publications-logos">
                  {heroContent.publications.map((pub, index) => (
                    <div key={index} className="publication-logo">
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
          </div>
          <div className="panel panel--right">
            <div className="panel__container">
              <div className="panel__image-wrapper">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
