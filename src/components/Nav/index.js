import React from "react";
import about from "../../assets/images/accessibility-outline.svg";
import resume from "../../assets/images/document-outline.svg";
import portfolio from "../../assets/images/folder-open-outline.svg";
import contact from "../../assets/images/chatbox-ellipses-outline.svg";

function Nav(props) {
  const { view, setView } = props;

  return (
    <>
    <div className="navigation">
      <ul>
        {/* <li className="nav-link" onClick={() => props.handleView('default')}>Home
                            </li> */}

        <li className="list active">
          <a href="#About" className="btn" onClick={() => setView("about")}>
            <span className="icon">
            <img src={about} />
            </span>
            <span className="text">About</span>
          </a>
        </li>
        <li className="list">
          <a
            href="#Portfolio"
            className="btn"
            onClick={() => setView("portfolio")}
          >
            <span className="icon">
              <img src={portfolio} />
            </span>
            <span className="text">Portfolio</span>
          </a>
        </li>
        <li className="list">
          <a href="#Resume" className="btn" onClick={() => setView("resume")}>
            <span className="icon">
              <img src={resume} />
            </span>
            <span className="text">Resume</span>
          </a>
        </li>

        <li className="list">
          <a href="#Contact" className="btn" onClick={() => setView("contact")}>
            <span className="icon">
              <img src={contact} />
            </span>
            <span className="text">Contact</span>
          </a>
        </li>
        {/* <li className="nav-link">
                <h5 className='btn'>Full Stack Web Developer</h5>
                </li> */}
                {/* <div className="indicator"></div> */}
      </ul>
    </div>

    {/* <script>
      const list = document.querySelectorAll('.list');
      function activeLink() {
        list.forEach((item)=>
        item.classList.remove('active'));
        this.classList.add('active');
      };
      list.forEach((item) =>
      item.addEventListener('click', activeLink))
    </script> */}
    </>
  );
}

export default Nav;
