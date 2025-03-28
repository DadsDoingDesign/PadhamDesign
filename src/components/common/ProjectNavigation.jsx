import Link from 'next/link';
import { useRouter } from 'next/router';
import projects from '@/data/projects';

const ProjectNavigation = () => {
  const router = useRouter();
  const { slug } = router.query;
  
  // Find current project index
  const currentIndex = projects.findIndex(project => project.slug === slug);
  
  // Determine next project (loop back to first if at the end)
  const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
  const nextProject = projects[nextIndex];

  return (
    <nav className="project-nav">
      <div className="project-nav__container">
        <Link href="/" className="project-nav__home-link">
          Home
        </Link>
        
        {nextProject && (
          <Link 
            href={`/projects/${nextProject.slug}`} 
            className="project-nav__next-link"
            aria-label={`Next project: ${nextProject.title}`}
          >
            <span className="project-nav__next-icon">→</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default ProjectNavigation;
