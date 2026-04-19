import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Ensure images are loaded and valid before rendering
  useEffect(() => {
    if (images && images.length > 0) {
      setImagesLoaded(true);
    }
  }, [images]);

  // If images aren't loaded yet, show a loading state
  if (!imagesLoaded || !images || images.length === 0) {
    return <div className="project-carousel__loading">Loading images...</div>;
  }

  // Get previous and next indices with wrapping (safe: images is non-empty here)
  const getPrevIndex = (index) => (index === 0 ? images.length - 1 : index - 1);
  const getNextIndex = (index) => (index === images.length - 1 ? 0 : index + 1);

  const prevIndex = getPrevIndex(currentIndex);
  const nextIndex = getNextIndex(currentIndex);

  // Handle dot navigation
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Handle image navigation
  const handlePrevClick = () => {
    setCurrentIndex(prevIndex);
  };

  const handleNextClick = () => {
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="project-carousel">
      <div className="project-carousel__container">
        {/* Left preview image */}
        <div className="project-carousel__preview project-carousel__preview--left" onClick={handlePrevClick}>
          {images[prevIndex] && (
            <Image
              src={images[prevIndex]}
              alt={`Previous image`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100px, 200px"
            />
          )}
        </div>

        {/* Main image */}
        <div className="project-carousel__main-image">
          {images[currentIndex] && (
            <Image
              src={images[currentIndex]}
              alt={`Project image ${currentIndex + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              priority={true}
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          )}
        </div>

        {/* Right preview image */}
        <div className="project-carousel__preview project-carousel__preview--right" onClick={handleNextClick}>
          {images[nextIndex] && (
            <Image
              src={images[nextIndex]}
              alt={`Next image`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100px, 200px"
            />
          )}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="project-carousel__dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`project-carousel__dot ${index === currentIndex ? 'project-carousel__dot--active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
