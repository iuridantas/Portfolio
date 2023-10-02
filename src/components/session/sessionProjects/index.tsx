import { CardProjects } from '../../card/projects';
import { ProjectsSession } from './style';
import { useState } from 'react';

export function SessionProjects() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalProjects = 5;
  const totalPages = Math.ceil(totalProjects / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const maxVisiblePages = 5;

  const visiblePages = [];
  for (
    let i = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    i <= Math.min(currentPage + Math.floor(maxVisiblePages / 2), totalPages);
    i++
  ) {
    visiblePages.push(i);
  }

  return (
    <section aria-label="Seção dos projetos já desenvolvidos">
      <ProjectsSession>
        <img className="transition" src="/img/transição.png" />
        <div>
          <h2>
            Projects <hr />
          </h2>
          <CardProjects currentPage={currentPage} itemsPerPage={itemsPerPage} />
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            {visiblePages.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={currentPage === pageNumber ? 'active' : ''}
              >
                {pageNumber}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Próximo
            </button>
          </div>
        </div>
      </ProjectsSession>
    </section>
  );
}
