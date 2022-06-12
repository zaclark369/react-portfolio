import React from "react";

function Nav(props) {
  const { view, setView } = props;

  return (
    <div className = "navigation">
          <ul>
            {/* <li className="nav-link" onClick={() => props.handleView('default')}>Home
                            </li> */}

            <li className="list">
              <a href="#About" className="btn" onClick={() => setView("about")}>
                <span className="icon"></span>
                <span className="text">About</span>
              </a>
            </li>
            <li className="list">
              <a
                href="#Portfolio"
                className="btn"
                onClick={() => setView("portfolio")}
              >
                <span className="icon"></span>
                <span className="text">Portfolio</span>
              </a>
            </li>
            <li className="list">
              <a
                href="#Resume"
                className="btn"
                onClick={() => setView("resume")}
              >
                <span className="icon"></span>
                <span className="text">Resume</span>
              </a>
            </li>

            <li className="list">
              <a
                href="#Contact"
                className="btn"
                onClick={() => setView("contact")}
              >
                <span className="icon"></span>
                <span className="text">Contact</span>
              </a>
            </li>
            {/* <li className="nav-link">
                <h5 className='btn'>Full Stack Web Developer</h5>
                </li> */}
          </ul>
        </div>
  );
}

export default Nav;
