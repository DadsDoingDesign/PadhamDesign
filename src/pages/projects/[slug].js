import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import projects from '@/data/projects';
import ProjectCarousel from '@/components/common/ProjectCarousel';
import ProjectNavigation from '@/components/common/ProjectNavigation';

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Find the project with the matching slug
  const project = projects.find(p => p.slug === slug);
  
  // If the project is not found or the page is still loading, show a loading state
  if (!project) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Loading...</h2>
      </div>
    );
  }
  
  return (
    <>
      <Head>
        <title>{project.title} | Padham Design</title>
        <meta name="description" content={project.description} />
      </Head>
      
      <main className="project-detail">
        <ProjectNavigation />
        
        <div className="project-detail__content-wrapper">
          <div className="project-detail__carousel-wrapper">
            <ProjectCarousel images={project.images.gallery} />
          </div>
          
          <div className="project-detail__info">
            <div className="project-detail__header">
              <h2 className="project-detail__title">{project.title}</h2>
              <h3 className="project-detail__location">{project.location}</h3>
            </div>
            
            <div className="project-detail__description-wrapper">
              <p className="project-detail__description">{project.description}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
