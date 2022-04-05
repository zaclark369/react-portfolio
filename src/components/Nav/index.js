import React from "react";

function Nav(props) {
  const { view, setView } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <li className="navbar-brand"></li>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-link" onClick={() => props.handleView('default')}>Home
                            </li> */}

            <li className="nav-link">
              <a href="#About" className="btn" onClick={() => setView("about")}>
                About
              </a>
            </li>
            <li className="nav-link">
              <a
                href="#Portfolio"
                className="btn"
                onClick={() => setView("portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-link">
              <a
                href="#Resume"
                className="btn"
                onClick={() => setView("resume")}
              >
                Resume
              </a>
            </li>

            <li className="nav-link">
              <a
                href="#Contact"
                className="btn"
                onClick={() => setView("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
