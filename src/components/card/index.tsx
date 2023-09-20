import { useEffect, useState } from 'react';
import { CardSession } from './style';
import projects from '../json/projects.json';

export function CardProjects() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = (imageUrls: string[]) => {
      const loadedImages = new Set<string>();
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          loadedImages.add(url);
          if (loadedImages.size === imageUrls.length) {
            setImagesLoaded(true);
          }
        };
      });
    };

    const imageUrls = projects.map((project) => project.photo);

    preloadImages(imageUrls);
  }, []);

  return (
    <section aria-label="card sobre os projetos já desenvolvidos">
      {projects.map((project, index) => (
        <CardSession key={index}>
          <a
            href={project.link_project}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.photo}
              alt={project.name}
              className={`${imagesLoaded ? '' : 'image-loading'}`}
            />
          </a>
          <h2>{project.name}</h2>
          <a
            href={project.link_github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Código no GitHub</h3>
          </a>
        </CardSession>
      ))}
    </section>
  );
}
