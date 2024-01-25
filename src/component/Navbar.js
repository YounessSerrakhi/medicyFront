import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import Cookies from 'js-cookie';
import { Dropdown } from 'react-bootstrap';
import { useAuth } from '../Contexts/AuthContext';
import logo from '../imgs/logo.png';

function Navbar() {
  const [showBrand, setShowBrand] = useState(false);
  const {logout,api} = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setShowBrand(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout =(event) => {
    event.preventDefault();
    api.defaults.headers['Authorization'] = `Bearer ${Cookies.get('token')}`;
    api.post('api/logout').then(response => {
      console.log(response);
      logout();
      alert(response.data.message);
    });
  };


  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-light bg-white"
      data-spy="affix"
      data-offset-top="510"
    >
      <div className="container">
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link to='/' className="nav-link" >
                    Home
                  </Link>
            </li>
            <li className="nav-item">
              <a href="#medicines" className="nav-link">
                Medicines
              </a>
            </li>
            <li className="nav-item">
              <a href="#promotions" className="nav-link">
                Promotions
              </a>
            </li>
          </ul>
          <ul className="navbar-nav brand">
            <img src={logo} alt="" className={`brand-img ${showBrand ? 'd-none' : ''}`} />
            <li className={`brand-txt ${showBrand ? '' : 'd-none'}`}>
              <h5 className="brand-title">Medicy</h5>
              <div className="brand-subtitle">irisi | Pharmacy</div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item last-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
            {!(Cookies.get('token')!==undefined) && ( // Render login and register links if not authenticated
              <>
                <li className="nav-item">
                  <Link to='/login' className="nav-link" >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                <Link to='/register' className="nav-link" >
                    Register
                  </Link>
                </li>
              </>
            )}
            {(Cookies.get('token')!==undefined) && (
              <>
              <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="dropdownMenuButton">
                {Cookies.get('userName')}
              </Dropdown.Toggle>
              <Dropdown.Menu className="form">
                  <a href="http://127.0.0.1:8000/logout" onClick={handleLogout}>Logout</a>
              </Dropdown.Menu>
            </Dropdown>
            </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
