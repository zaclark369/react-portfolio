import React, { useState, useEffect} from "react";


function Portfolio() {
  const projects = ['Pantry', "Password-Generator", "jumping_fryingpan_sidescroller", "CMS_Employee_Tracker", "eCommerce-backend"];
  const [projectData, setProjectData] = useState([]);

  const [selected, setSelected] = useState("");

  useEffect(() => { getProjects( )},
  // eslint-disable-next-line
  []);
  
  async function getProjects() {
    const projectArray = [];
    let index = 1;
    for (const project of projects) {
      const response = await fetch(`https://api.github.com/repos/zaclark369/${project}`);
      const data = await response.json();
      await projectArray.push({
        name: data.name,
        description: data.description,
        gitLink: data.svn_url,
        liveLink: data.homepage,
        index: index,
        topics: data.topics
      });
      index++

    };
    setProjectData(projectArray);
  };

  function clickHandler(event){
    const card = event.target;
    card.scrollIntoView({block: "center"});
    (card.className.includes("selected-card"))  ? setSelected("") : setSelected(card.id);
  }

  return (
    <div className = 'project-card-container' onClick = {clickHandler}>
      <p className="loading-message" style= {{"display" : projectData.length ? "none" : "block"}} >Collecting projects...</p>

      {projectData.map((data) => (
                <div key={data.index} id={data.name} className={`project-card ${selected === data.name && "selected-card"}`} style={{
                    animationDuration: `${data.index / 2}s`
                }}>
                    <h4>{data.name}</h4>

                    <div className="img-container">
                        <a href={data.gitLink} target='__blank'>
                            <img className="git-link"  src={require('../../assets/images/github.svg')} alt="GitHub Link" />
                        </a>
                    </div>

                    <img className="screenshot" style={{ "display": selected === data.name ? "block" : "none" }} src={require(`../../assets/images/${data.name}.jpg`)} alt={`Screenshot of ${data.name}`}/>
                    <p>{data.description}</p>
                    <p style={{ "display": selected === data.name ? "none" : "block", "margin": "0","fontSize": "16px"}}>Click for more...</p>
                <div style={{ "display": selected === data.name ? "block" : "none" }} >
                    <p  className="tech-title" style={{ "display": selected === data.name ? "block" : "none" }}>   Technologies: </p> 
                    <ul className="columns-list">
                        {data.topics.map((topic) => (
                                <li key={topic}> {topic} </li>
                        ))}
                        </ul>
                </div>
                    <div className={`liveLinkDiv  ${selected === data.name && "reset"} `} >
                        {data.liveLink && <a className='liveLink' href={data.liveLink} target='__blank'>Live Link</a>}
                    </div>
                </div>
            ))}
        </div>
    )
};


  // Old way I was doing the project portfolio, will be updated to use repo API

//   const [projects] = useState([
//     {
//       name: 'Chew View',
//       repo: 'https://github.com/ChristopherLawn/team-1-dinner-movie',
//       key: 0,
//       live: "https://christopherlawn.github.io/team-1-dinner-movie/",
//       description:
//         "The purpose of this website is to simplify date nights and speed up decision-making! Chew View solves a multitude of problems - particularly when you're on the move, stuck on which movie and food pairing to pick, or simpily trying to figure out some options. For example, a user is going on a date night with their partner. The user would turn to Chew View to easily pick a food option and a random movie that they can get excited for. The application facilitates quick API calls which allow the user to: get restaurant selections based on zip code, store the user's previous zip code searches for faster selection, and provide random movie selections or selections based on the user's keyword or title search!",
//         image: "chewview.png"
//     },
//     {
//       name: 'Pantry',
//       repo: 'https://github.com/zaclark369/Pantry',
//       key: 2,
//       live: "",
//       description:
//       "Have you ever wanted to make dinner but can't think of anything. This application will take what you have in your pantry and suggest appropriate recipes using the ingredients you already have. Create an account and you can save your favorites for future viewing. Keyword buttons will help you quickly reach an easy meal to make and visual recipe cards will show you how good home cooking can look.",
//       image: "pantry.png"
//     },
//     {
//       name: 'Password Generator',
//       repo: 'https://github.com/zaclark369/Password-Generator',
//       key: 3,
//       live: "",
//       description:
//       "A website that offers options to choose between 4 different character sets and a length, and then generates a password from those selected options.",
//       image: "password.png"
//     },
//     {
//       name: 'Have you tried being SOCIAL?',
//       repo: 'https://github.com/zaclark369/have-you-tried-being-social',
//       key: 4,
//       live: "",
//       description:
//       "The backend of a social network app. This backend will allow creation of users, thoughts, reactions, and freinding/unfriending other users.",
//       image: "social.png"
//     },
//     {
//       name: 'Jumping Frying Pan',
//       repo: 'https://github.com/zaclark369/jumping_fryingpan_sidescroller',
//       key: 5,
//       live: "",
//       description:
//         'A CSS based sidescroller game based on the dino game in chrome. It was built as a simple easter egg for the Pantry project',
//         image: "frying.png"
//     },
//     {
//       name: 'Employee Tracker',
//       repo: 'https://github.com/zaclark369/CMS_Employee_Tracker',
//       key: 6,
//       live: "",
//       description:
//       "AS A business owner I WANT to be able to view and manage the departments, roles, and employees in my company SO THAT I can organize and plan my business",
//       image: "employee.PNG"
//     },
//   ]);
  
//   // const currentProjects = projects.filter(project => project.repo === repo);

//   // const toggleModal = (image) => {
//   //   setCurrentProject({ ...image });
//   //   setIsModalOpen(!isModalOpen);
//   // };

//   return (
//     // <div>
//     //   {isModalOpen && (
//     //     <Modal onClose={toggleModal} currentProject={currentProject} />
//     //   )}
//     // </div>

// <>
// {projects.map((project) => (
//   <div className="py-3 card" key={`portfolio${project.key}`}>
//     <h2 key={`h${project.key}`}>
//       <a
//         href={project.live}
//         rel="noopener noreferrer"
//         target="_blank"
//         className="text-decoration-none project-header"
//       >
//         {project.name}
//       </a>
//     </h2>
//     <img
//       className="card-img-top"
//         src={require(`../../assets/images/${project.image}`)}
//         alt={project.name}
//         key={`img${project.key}`}
//         // width="500"
//         // height="300"
//       />
//     <div key={`div${project.key}`} className="m-2 d-flex p-2 card-body">
//       <p key={`p${project.key}`} className="mx-3 p-2 card-text">{project.description}</p>
      
//       <a
//         href={project.repo}
//         rel="noopener noreferrer"
//         target="_blank"
//         key={`anchor${project.key}`}
//         className=" px-2 mx-3 mb-2 btn btn-primary"
//       >
//         Project GitHub Repository
//       </a>
//     </div>
//   </div>
// ))}
// </>

// );
  
// };

export default Portfolio;
