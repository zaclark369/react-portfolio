import React from 'react';

const Modal = ({ onClose, currentProject }) => {
//   const { name, description, category } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
      <>
      {projects.map((project) => (
        <div className="py-3" key={`portfolio${project.key}`}>
          <h2 key={`h${project.key}`}>
            <a
              href={project.live}
              rel="noopener noreferrer"
              target="_blank"
              className="text-decoration-none project-header"
            >
              {project.name}
            </a>
          </h2>
          <div key={`div${project.key}`} className="m-2 d-flex project p-2">
            <p key={`p${project.key}`} className="project-des mx-2 p-2">{project.description}</p>
            <img
              src={require(`../../assets/images/${project.photo}`)}
              alt={project.name}
              key={`img${project.key}`}
              width="500"
              height="300"
            />
            <a
              href={project.repo}
              rel="noopener noreferrer"
              target="_blank"
              key={`anchor${project.key}`}
              className="project-gh text-decoration-none px-2"
            >
              Project GitHub Repository
            </a>
          </div>
        </div>
      ))}
    </>
        <button type="button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
