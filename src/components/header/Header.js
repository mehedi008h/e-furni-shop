import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";

import "./Header.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h3>Furni.SHOP</h3>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a className="nav_link" href="#home">
            Home
          </a>
        </li>
        <li className="p__opensans">
          <a className="nav_link" href="#about">
            About
          </a>
        </li>
        <li className="p__opensans">
          <a className="nav_link" href="#products">
            Products
          </a>
        </li>
        <li className="p__opensans">
          <a className="nav_link" href="#features">
            Features
          </a>
        </li>
        <li className="p__opensans">
          <a className="nav_link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          <HiShoppingCart size={25} />
        </a>
        <div />
        <a href="/" className="p__opensans">
          Log In / Registration
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#244d4d"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay d-flex align-items-center justify-content-center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a
                  href="#home"
                  className="sm_link"
                  onClick={() => setToggleMenu(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="sm_link"
                  onClick={() => setToggleMenu(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="sm_link"
                  onClick={() => setToggleMenu(false)}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="sm_link"
                  onClick={() => setToggleMenu(false)}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="sm_link"
                  onClick={() => setToggleMenu(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
