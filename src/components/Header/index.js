import React from 'react';
import Nav from '../Nav';


const Header = ({view, setView}) => {

    return (
        <div className="row d-flex justify-content-center m-3">
            <div id = "title" className="col-sm-3">
                <h1>Zachary Clark</h1>
                
            </div>

            {/* <Nav view={view} setView={setView}></Nav> */}
        </div>
    )
}

export default Header;