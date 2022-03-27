import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div classNameName="App">
      {/* <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header>
      <h1>
        <a href="index.html">Zachary Clark</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#AboutMe">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#technologies">Technologies</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          
        </ul>
      </nav>
    </header>
    
    <section className="hero">
        <div className="hero-container hero-picture">
          <img src="./assets/images/profile.jpg" alt="Profile Picture" />
        </div>
        <div className="hero-container">
          <a id="AboutMe"></a>
          <h2>About Me</h2>
          <p className="paragraphdesc">
            I am an aspiring web developer who loves to work on exciting and
            challenging projects. I have worked in several fields, with my current focus on contract processing and system
            improvement. 
          </p>
        </div>
        <div className="herotext">
          <div className="herotexttop">
            <h1>I’m ready to design your website and build it</h1>
            <p className="paragraphdesc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus quasi obcaecati rerum magnam qui soluta, minus
              recusandae eaque culpa autem tempore saepe dolorum vero reiciendis
              illum nobis magni ratione blanditiis.
              <br />
            </p>
          </div> 
           <a href="#capabilities" className="buttondown">Check out my capabilities</a> 
        </div>
    </section>
<br/>
 
    <main>
      <section className="content">
        <div className="AboutMe" id="#aboutme">

        </div>
        <div className="projects" id="projects">
        <div className='section-title'>
          <h2>Projects</h2>
        </div>
          <section className="section-content">
           
            <article className="boxmodel">
              <a href="https://zaclark369.github.io/run-buddy/" target="_blank">
                <img
                  src="./assets/images/run-buddy-screengrab.png"
                  alt="Completed run buddy website"
                />
               
              </a>
              <div className="boxtext">
                <h3>Run Buddy Landing site</h3>
              <p>
                Built a landing page and privacy policy to match the given mock up for a training company.
                <br/>
                Technologies used: HTML, CSS, GIT
              </p>
            </div>
            </article>
            <article className="boxmodel">
              <a
                href="https://zaclark369.github.io/Horiseon-Accessability/"
                target="_blank"
              >
                <img
                  src="./assets/images/horiseon-screen-capture.png"
                  alt="Completed Horiseon Accessability website"
                />
              </a>
              <div className="boxtext">
                <h3>Horeiseon Accessability Landing Page</h3>
              <p>
                HTML based page that we optomized for SEO and accessibility.
                <br/>
                Technologies used: HTML, CSS, GIT
              </p>
            </div>
            </article>
            <article className="boxmodel">
                <a href="https://zaclark369.github.io/robot-gladiators/" target="_blank">
                    <img src="./assets/images/robot-gladiator_Screenshot.png" alt="Chrome window showing prompt box that runs game."/>
                </a>
                <div className="boxtext">
                    <h3>Robot Gladiators</h3>
                <p>
                    Simple JavaScript game
                    <br/>
                    Technologies used: HTML, JavaScript, GIT
                </p>
            </div>
            </article>
            <article className="boxmodel">
                <a href="https://zaclark369.github.io/Password-Generator/" target="_blank">
                    <img src="./assets/images/password-generator-screengrab.png" alt="Screenshot of password generator home page"/>
                </a>
                <div className="boxtext">
                    <h3>Password Generator</h3>
                <p>
                    Password generator using prompts to user for upper case, lower case, and special characters.
                    <br/>
                    Technologies used: HTML, JavaScript, CSS, GIT
                </p>
            </div>
            </article>
            <article className="boxmodel">
              <a href="https://christopherlawn.github.io/team-1-dinner-movie/" target="_blank">
                  <img src="./assets/images/chew-and-view-screengrab.png" alt="Screenshot of chew and view home page" />
              </a>
              <div className="boxtext">
                  <h3>Chew and View</h3>
              <p>
                  Front end website for linking a zipcode based restaurant and movie together for a potential date night.
                  <br/>
                  Technologies used: HTML, JavaScript, CSS, GIT, Materialize Framework
              </p>
          </div>
          </article>
          <article className="boxmodel">
            <a href="https://whispering-reef-71968.herokuapp.com/" target="_blank">
                <img src="./assets/images/screenshotHomepage.png" alt="Screenshot of pantry home page"/>
            </a>
            <div className="boxtext">
                <h3>Pantry</h3>
            <p>
              A full stack application utilizing sql practices of Get/Post to find recipes from a database. They can be viewed or even saved with an account.
              <p>Blurb: Have you ever wanted to make dinner but can't think of anything. This application will take what you have in your pantry and suggest appropriate recipes using the ingredients you already have. Create an account and you can save your favorites for future viewing. Keyword buttons will help you quickly reach an easy meal to make and visual recipe cards will show you how good home cooking can look.</p>
                <br/>
                Technologies used: HTML, JavaScript, CSS, GIT, Bootstrap Framework, Sequalize, MySQL, npm, NodeJS
            </p>
        </div>
        </article>
        </section>
        </div>
        <section className="skills" id="technologies">
           <div className="section-title">
            <h2>Skills</h2>
           </div>
           <div className="boxmodel skillscontainer">
               <h3></h3>
               <ul className="grid">
                   <li>
                       <div className="gridcontainer">
                           <img src="./assets/images/html.svg" alt=""/>
                           <p>HTML</p>
                       </div>
                   </li>
                   <li>
                    <div className="gridcontainer">
                        <img src="./assets/images/css.svg" alt=""/>
                        <p>CSS</p>
                    </div>
                </li>
                <li>
                    <div className="gridcontainer">
                        <img src="./assets/images/git.svg" alt=""/>
                        <p>GIT</p>
                    </div>
                </li>
                <li>
                  <div className="gridcontainer">
                      <img src="./assets/images/js.svg" alt=""/>
                      <p>JS</p>
                  </div>
              </li>
               </ul>
           </div>
        </section>
        <div className="resume" id="#resume"></div>
      </section>
    </main>

    <footer>
      <a id="contact"></a>
      <h2>Contact:</h2>
      <h3>
        <a href="https://www.linkedin.com/in/zachary-aclark/" target="_blank"
          ><img src="./assets/images/linkedin.svg" alt="linkedin logo as link"
        /></a>
      </h3>
      <h3>
        <a href="https://github.com/zaclark369" target="_blank"
          ><img src="./assets/images/github.svg" alt="github logo as a link"
        /></a>
      </h3>
      <h3 id="resume">
        <a href="">Download Resume</a>
      </h3>
      <h3>
        <a href="mailto:zacclark369@gmail.com">Email</a>
      </h3>
      <p>&copy; 2021 Zachary Clark</p>
    </footer>
    </div>
  );
}

export default App;
