import React, { useState, useEffect } from "react";

function Portfolio() {
  // const projectList = [
  //   "weather-plotter",
  //   "Pantry",
  //   "gist",
  //   "employee-tracker",
  //   "dinner&amovie",
  // ];
  // const [project, setProject] = useState([]);
  // const [hover, setHover] = useState("");

  // async function getPortfolio() {
  //   const portfolio = [];
  //   let i = 1;
  //   for (const project of projectList) {
  //     const response = await fetch(
  //       `https://api.github.comrepos/zaclark369/${project}`
  //     );
  //     const data = await response.json();
  //     await portfolio.push({
  //       name: data.name,
  //       description: data.description,
  //       gitLink: data.svn_url,
  //       liveLink: data.homepage,
  //       index: index,
  //       topics: data.topics,
  //     });
  //     i++
  //   };
  //   setProject(portfolio);
  // };

  // function handleClick(e) {
  //   const cards = e.target;
  //   cards.scroll({ block: 'center'});
  //   (cards.className.includes("selected-card")) ? setHover('') : setHover(cards.id)
  // }

  return (
    <div>
      {/* <p className="loading">Loading...</p>

      {project.map((Data) => (
        <div key ={data.i} id={data.name} className={`pCard ${selected === data.name && "selected-card"}`} >
          <h4>{data.name}</h4>
          <div className="img-container">
            <a href= {data.gitlink} target="_blank">
              <img className="github" src={require('../../assets/images/github.png')} alt="github" />
            </a>
      </div>

      <img className="screenshot" style={{ "display": selected === data.name ? "block" : "none" }} src={require(`../../assets/images/${data.name}.jpg`)} alt={`Screenshot of ${data.name}`}/>

      <p>{data.description}</p>
                    <p style={{ "display": selected === data.name ? "none" : "block", "margin": "0","fontSize": "16px"}}>Click for more...</p>
        
                    <p  className="tech-title" style={{ "display": selected === data.name ? "block" : "none" }}>  
                    Technologies:
                    <ul className="columns-list">
                        {data.topics.map((topic) => (
                                <li key={topic}> {topic} </li>
                        ))}
                        </ul>
                    </p> 
                
                    <div className={`liveLinkDiv  ${selected === data.name && "reset"} `} >
                        {data.liveLink && <a className='liveLink' href={data.liveLink} target='__blank'>Live Link</a>}
                    </div>
                </div>
            ))} */}
        </div>
  
  );
}

export default Portfolio;
