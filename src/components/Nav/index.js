import React from 'react';


function Nav(props) {

    return (
        
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <li className = "navbar-brand"></li>
                    <div className="navbar-collapse collapse" id='navbarSupportedContent'>
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-link" onClick={() => props.handleView('default')}>Home
                            </li>
                            <li className="nav-link" onClick={() => props.handleView('portfolio')}>Portfolio</li>
                            <li className="nav-link" onClick={() => props.handleView('about')}>About</li>
                            <li className="nav-link" onClick={() => props.handleView('contact')}>Contact</li>
                      </ul>
                    </div>

                </div>
                </nav>
        </header>
    )
}

export default Nav;