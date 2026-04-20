import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import projects from '@/data/projects';

export async function getStaticPaths() {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const idx = projects.findIndex((p) => p.slug === params.slug);
  const project = projects[idx] || null;
  const nextProject = project ? projects[(idx + 1) % projects.length] : null;
  return { props: { project, nextProject, slug: params.slug, index: idx } };
}

export default function ProjectDetail({ project, nextProject, index }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  if (!project) return null;

  const [heroImage, ...galleryImages] = project.images.gallery;

  return (
    <>
      <Head>
        <title>{project.title} | Padham Design</title>
        <meta name="description" content={project.description} />
      </Head>

      <main className="project-detail">
        {/* Floating nav */}
        <nav className="project-nav">
          <Link href="/" className="project-nav__home">Padham Design</Link>
          {nextProject && (
            <Link href={`/projects/${nextProject.slug}`} className="project-nav__next">
              <span className="project-nav__next-label">Next</span>
              <span className="project-nav__next-name">{nextProject.title}</span>
              <span className="project-nav__next-arrow">→</span>
            </Link>
          )}
        </nav>

        {/* Cinematic hero — full viewport */}
        <div className="project-detail__hero" ref={heroRef}>
          <motion.div className="project-detail__hero-parallax" style={{ y: heroY }}>
            <Image
              src={heroImage}
              alt={project.title}
              fill
              priority
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </motion.div>
          <div className="project-detail__hero-scrim" />
          <motion.div
            className="project-detail__hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="project-detail__index">
              {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__location">{project.location}</p>
          </motion.div>
        </div>

        {/* Description */}
        <motion.section
          className="project-detail__info"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="project-detail__description">{project.description}</p>
        </motion.section>

        {/* Gallery grid */}
        {galleryImages.length > 0 && (
          <div className="project-detail__gallery">
            {galleryImages.map((src, i) => (
              <motion.div
                key={src}
                className={`project-detail__gallery-item project-detail__gallery-item--${i % 3}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={src}
                  alt={`${project.title} — ${i + 2}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 600px) 100vw, 50vw"
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Next project */}
        {nextProject && (
          <Link href={`/projects/${nextProject.slug}`} className="project-detail__next-project">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="project-detail__next-label">Next Project</span>
              <h2 className="project-detail__next-title">{nextProject.title}</h2>
              <span className="project-detail__next-location">{nextProject.location}</span>
            </motion.div>
          </Link>
        )}
      </main>
    </>
  );
}
