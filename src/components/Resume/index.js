import React from 'react';
import Skills from '../Skills';

const Resume = () => {
    return (
        <section id="resume">
            <h2>Resume</h2>
            <div className='resume'>
                <div className='skills'>
                    <h3>Techologies</h3>

                    <ul>
                    <li> React</li>
                        <li> MongoDB</li>
                        <li> Mongoose</li>
                        <li> Sequelize</li>
                        <li> GraphQL</li>
                        <li> Express</li>
                        <li> Javascript</li>
                        <li>CSS/HTML</li>
                        <li>Node.js</li>
                        <li> RESTful APIs</li>
                    </ul>
                    {Skills}
                </div>
                <div className='resume-link'>
                    <a href='https://docs.google.com/document/d/11nFrE6ACFjBQl38hD2Lnj5uBUEtt46An/edit?usp=sharing&ouid=103187954184553838535&rtpof=true&sd=true'>Resume Link</a>
                </div>
            </div>



        </section>
    )
}

export default Resume;