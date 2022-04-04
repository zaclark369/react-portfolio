import React from 'react';

function Nav(props) {
    return (
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
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            
          </ul>
        </nav>
      </header>
    )
}

export default Nav;