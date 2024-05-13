import React, { useState } from "react";
import photos from "./photos";
import Modal from "../Modal/Modal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Spinner from "../Spinner/Spinner";

import styles from "./GalleryWorks.module.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1550 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1550, min: 1050 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1024, min: 0 },
    items: 1,
  },
};

const GalleryWorks: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const showModal = (img: string) => {
    setImageSrc(img);
    setIsOpen(true);
  };
  return (
    <div className={styles.gallery_works}>
      {!imageLoaded && <Spinner />}
      {photos.map((project) => (
        <div key={project.id} className={styles.work}>
          <p className={styles.name}>{project.name}</p>
          <p className={styles.theme}>{project.theme_capsule}</p>
          <div className={styles.images}>
            <Carousel responsive={responsive}>
              {project.images.map((image: any) => (
                <LazyLoadImage
                  key={image.id}
                  src={image.src}
                  alt={image.id}
                  onClick={() => {
                    showModal(image.src);
                    setSelectedProject(project);
                  }}
                  className={styles.image}
                  effect="blur"
                  onLoad={handleImageLoad}
                />
              ))}
            </Carousel>
          </div>
        </div>
      ))}
      {isOpen && (
        <Modal
          src={imageSrc}
          alt={selectedProject ? selectedProject.name : ""}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default GalleryWorks;
