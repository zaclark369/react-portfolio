import React from 'react';
import Nav from '../Nav';
import profile from '../../../public/assets/images/profile.jpg';

const Header = ({view, setView}) => {

    return (
        <header>
            <div id = "title">
                <h1>Zachary Clark</h1>
                <img id="profile" src= {profile} alt = "Zachary Clark; Web Developer" />
                <h2>Full Stack Web Developer</h2>
            </div>

            <Nav view = {view} setView = {setView}/>
        </header>
    )
}

export default Header;