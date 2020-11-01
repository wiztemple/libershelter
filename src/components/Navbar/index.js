import React from "react";


// style
import "./NavbarStyle.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container-fluid">
        <div className="nav-mobile">
          <div className="nav-brand">
            <a href="/">LiberShelter</a>
          </div>
          <div>
            <button className="nav-menu-button">
              <svg
                className="nav-menu-hamburger"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="nav-menu">
          <div className="nav-left">



          </div>
          <div className="nav-right">
            <div className="nav-item">Kraft Alpha is out!</div>
            <a href="#" className="nav-link">
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
