import React from 'react';
import linkedIn from '../../assets/images/linkedin.svg';
import github from '../../assets/images/github.svg';
import mailto from '../../assets/images/mailto.svg';


function Footer(props){
    return (
   
      <div>
     
        <a href="https://www.linkedin.com/in/zachary-aclark/" target="_blank"
           rel="noreferrer">
               <img src={linkedIn} alt="linkedin logo as link"
        /></a>
    
     
        <a href="https://github.com/zaclark369" target="_blank"
          ><img src={github} alt="github logo as a link"
        /></a>
     
    
     
        <a href="mailto:zacclark369@gmail.com"><img src={mailto} alt="mailto"></img></a>
      
      <p>&copy; 2022 Zachary Clark</p>
 
      </div>
    )
}

export default Footer;