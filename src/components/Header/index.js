import React from 'react';
import Nav from '../Nav';
import profile from '../../assets/images/profile.jpg';

const Header = ({view, setView}) => {

    return (
        <div className="row d-flex justify-content-center m-3">
            <div id = "title" className="col-sm-3">
                <h1>Zachary Clark</h1>
                <img className="figure-img img-fluid" id="profile" src= {profile} alt = "Zachary Clark; Web Developer" />
                <h2>Full Stack Web Developer</h2>
            </div>

            <Nav view = {view} setView = {setView}/>
        </div>
    )
}

export default Header;