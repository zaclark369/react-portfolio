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
    )
}

export default Nav;