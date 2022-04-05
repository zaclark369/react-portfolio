import React, { useState} from "react";
import Modal from "../Modal";

function Portfolio({ category }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();
  
  
  const [projects] = useState([
    {
      name: 'chewview',
      category: 'chewview',
      description:
        "The purpose of this website is to simplify date nights and speed up decision-making! Chew View solves a multitude of problems - particularly when you're on the move, stuck on which movie and food pairing to pick, or simpily trying to figure out some options. For example, a user is going on a date night with their partner. The user would turn to Chew View to easily pick a food option and a random movie that they can get excited for. The application facilitates quick API calls which allow the user to: get restaurant selections based on zip code, store the user's previous zip code searches for faster selection, and provide random movie selections or selections based on the user's keyword or title search!"
    },
    {
      name: 'pantry',
      category: 'pantry',
      description:
      "Have you ever wanted to make dinner but can't think of anything. This application will take what you have in your pantry and suggest appropriate recipes using the ingredients you already have. Create an account and you can save your favorites for future viewing. Keyword buttons will help you quickly reach an easy meal to make and visual recipe cards will show you how good home cooking can look."
    },
    {
      name: 'passwordgenerator',
      category: 'passwordgenerator',
      description:
      "A website that offers options to choose between 4 different character sets and a length, and then generates a password from those selected options."
    },
    {
      name: 'socialnetwork',
      category: 'socialnetwork',
      description:
      "The backend of a social network app. This backend will allow creation of users, thoughts, reactions, and freinding/unfriending other users."
    },
    {
      name: 'Jumping Frying Pan',
      category: 'jumpingfryingpan',
      description:
        'A CSS based sidescroller game based on the dino game in chrome. It was built as a simple easter egg for the Pantry project'
    },
    {
      name: 'Employee Tracker',
      category: 'employeetracker',
      description:
      "AS A business owner I WANT to be able to view and manage the departments, roles, and employees in my company SO THAT I can organize and plan my business"
    },
  ]);
  
  const currentProjects = projects.filter(project => project.category === category);

  const toggleModal = (image) => {
    setCurrentProject({ ...image });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentProject} />
      )}
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/projects/${category}/.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
