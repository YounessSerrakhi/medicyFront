import React from "react";

function Header() {
    return (
      <header>
        <a href="components.html" className="btn btn-primary btn-component" data-spy="affix" data-offset-top="600">
          <i className="ti-shift-left-alt"></i> Components
        </a>
        <div className="header">
          <div className="container">
            <ul className="social-icons pt-3">
              <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-facebook" aria-hidden="true"></i></a></li>
              <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-twitter" aria-hidden="true"></i></a></li>
              <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-google" aria-hidden="true"></i></a></li>
              <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-instagram" aria-hidden="true"></i></a></li>
              <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-github" aria-hidden="true"></i></a></li>
            </ul>
            <div className="header-content">
              <h4 className="header-subtitle">Pharmacy</h4>
              <h1 className="header-title">Medicy IRISI</h1>
              <h6 className="header-mono">All medicines you need</h6>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;
  