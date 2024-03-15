import React from 'react';

import { NavLink } from 'react-router-dom';

 const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg  bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/about">About</NavLink>
              </li>
              
             
      
            </ul>
  
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label mx-2 " for="flexSwitchCheckDefault">Enable lightmode</label>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input mx-2" onClick={props.greenMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label mx-2 " for="flexSwitchCheckDefault">Enable Green mode</label>
          </div>
        </div>

      </nav>
    </div>
  )
}
export default Navbar;


