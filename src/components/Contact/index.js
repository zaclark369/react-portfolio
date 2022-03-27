import React from 'react';

function Contact(props){
    return (
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
    
    )
}

export default Contact;