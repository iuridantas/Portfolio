import { useEffect, useState } from 'react';
import { CardSession } from './style';
import { AiFillGithub } from 'react-icons/ai';
import projects from '../../json/projects.json';

interface CardProjectsProps {
  currentPage: number;
  itemsPerPage: number;
}

export function CardProjects({ currentPage, itemsPerPage }: CardProjectsProps) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const projectsToDisplay = projects.slice(startIndex, endIndex);

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
  
    const imageUrls = projectsToDisplay.map((project) => project.photo);
  
    preloadImages(imageUrls);
  }, [projectsToDisplay]);
  
  return (
    <section aria-label="card sobre os projetos já desenvolvidos">
      {projectsToDisplay.map((project, index) => (
        <CardSession key={index}>
          <a href={project.link_project} target="_blank" rel="noopener noreferrer">
            <img
              src={project.photo}
              alt={project.name}
              className={`${imagesLoaded ? '' : 'image-loading'}`}
            />
          </a>
          <h2>{project.name}</h2>
          <a href={project.link_github} target="_blank" rel="noopener noreferrer">
            <div>
              <h3>Código no GitHub</h3>
              <AiFillGithub />
            </div>
          </a>
        </CardSession>
      ))}
    </section>
  );
}