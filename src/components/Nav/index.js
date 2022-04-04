import React from 'react';


function Nav({view, setView}) {

  function clickHandler(e) {
    (e.target.type === 'button') && setView(e.target.name);
  }

    return (
        
        <nav onclick={clickHandler}>
          
              <button className={`${view == "About" && "nav-selected"}`} type = 'button' name= "about">About Me</button>
            
              <button className={`${view == "Portfolio" && "nav-selected"}`} type = 'button' name= "portfolio">Portfolio</button>
            
              <button className={`${view == "Resume" && "nav-selected"}`} type = 'button' name= "resume">Resume</button>
            
              <button className={`${view == "Contact" && "nav-selected"}`} type = 'button' name= "contact">Contact</button>
            
        </nav>
     
    )
}

export default Nav;