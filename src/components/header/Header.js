import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faEnvelopeOpenText,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const changeNavColor = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("header").style.background = "#fff";
      document.getElementById("header").style.height = "80px";
      document.getElementById("header").classList.add("shadow");
    } else {
      document.getElementById("header").style.background = "none";
      document.getElementById("header").style.height = "100px";
      document.getElementById("header").classList.remove("shadow");
    }
  };
  window.onscroll = () => {
    changeNavColor();
  };

  return (
    <div className="menu-header" id="header">
      <div className="web-logo">
        <img src="../../../images/logo.png" alt="" />
      </div>
      <div className="menu-navbar d-flex">
        <ul style={{ marginRight: "30px" }}>
          <li>
            <a href="#" className="menu-link">
              home
            </a>
            <div className=" submenu-general submenu-center shadow">
              <div className="row">
                <div className="col">
                  <span
                    style={{color: "#050748", fontSize: "20px", fontWeight: "700"}}
                    >Multi-Page Demo</span
                  >
                  <div className="row">
                    <div className="col">
                      <ul className="no-decor">
                        <li><a href="#">Homepage</a></li>
                        <li><a href="#">Digital Agency</a></li>
                        <li><a href="#">Digital Agency Dark</a></li>
                        <li><a href="#">Web Design Agency</a></li>
                        <li><a href="#">Web Design Agency Dark</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">Digital Marketing Dark</a></li>
                        <li><a href="#">Lead Generation Agency</a></li>
                        <li><a href="#">Lead Generation Agency Dark</a></li>
                      </ul>
                    </div>
                    <div className="col">
                      <ul className="no-decor">
                        <li><a href="#">Homepage</a></li>
                        <li><a href="#">Digital Agency</a></li>
                        <li><a href="#">Digital Agency Dark</a></li>
                        <li><a href="#">Web Design Agency</a></li>
                        <li><a href="#">Web Design Agency Dark</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">Digital Marketing Dark</a></li>
                        <li><a href="#">Lead Generation Agency</a></li>
                        <li><a href="#">Lead Generation Agency Dark</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <span
                    style={{color: "#050748", fontSize: "20px", fontWeight: "700"}}
                    >Multi-Page Demo</span
                  >
                  <div className="row">
                    <div className="col">
                      <ul className="no-decor">
                        <li><a href="#">Homepage</a></li>
                        <li><a href="#">Digital Agency</a></li>
                        <li><a href="#">Digital Agency Dark</a></li>
                        <li><a href="#">Web Design Agency</a></li>
                        <li><a href="#">Web Design Agency Dark</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">Digital Marketing Dark</a></li>
                        <li><a href="#">Lead Generation Agency</a></li>
                        <li><a href="#">Lead Generation Agency Dark</a></li>
                      </ul>
                    </div>
                    <div className="col">
                      <ul className="no-decor">
                        <li><a href="#">Homepage</a></li>
                        <li><a href="#">Digital Agency</a></li>
                        <li><a href="#">Digital Agency Dark</a></li>
                        <li><a href="#">Web Design Agency</a></li>
                        <li><a href="#">Web Design Agency Dark</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">Digital Marketing Dark</a></li>
                        <li><a href="#">Lead Generation Agency</a></li>
                        <li><a href="#">Lead Generation Agency Dark</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#" className="menu-link">
              page
            </a>
            <div className=" submenu-general submenu-center shadow">
              <div className="row">
                <div className="col">
                  <ul className="no-decor">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Why Us</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="#">Case Study</a>
                    </li>
                    <li>
                      <a href="#">Case Study Single</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="no-decor">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Why Us</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="#">Case Study</a>
                    </li>
                    <li>
                      <a href="#">Case Study Single</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="no-decor">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Why Us</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="#">Case Study</a>
                    </li>
                    <li>
                      <a href="#">Case Study Single</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="no-decor">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Why Us</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="#">Case Study</a>
                    </li>
                    <li>
                      <a href="#">Case Study Single</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#" className="menu-link">
              shortcode
            </a>
            <ul className="submenu-general submenu-center shadow">
              <div className="row">
                <div className="col">
                  <ul className="no-decor">
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                    <li>
                      <a href="#">Typography</a>
                    </li>
                    <li>
                      <a href="#">Buttons</a>
                    </li>
                    <li>
                      <a href="#">Office Location</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="no-decor">
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Tabs</a>
                    </li>
                    <li>
                      <a href="#">404 Page</a>
                    </li>
                    <li>
                      <a href="#">Background Gradients</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="no-decor">
                    <li>
                      <a href="#">Header v1</a>
                    </li>
                    <li>
                      <a href="#">Header v2</a>
                    </li>
                    <li>
                      <a href="#">Header v3</a>
                    </li>
                    <li>
                      <a href="#">Footer</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="no-decor">
                    <li>
                      <a href="#">Hover Animation</a>
                    </li>
                    <li>
                      <a href="#">Popup Modal</a>
                    </li>
                    <li>
                      <a href="#">Lists</a>
                    </li>
                    <li>
                      <a href="#">Boostrap Components</a>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <a href="#" className="menu-link">
              portfolio
            </a>
            <ul className="submenu-general submenu-right no-decor shadow">
              <li>
                <a href="#">Portfolio Grid 1</a>
              </li>
              <li>
                <a href="#">Portfolio Grid 2</a>
              </li>
              <li>
                <a href="#">Portfolio Wide Block</a>
              </li>
              <li>
                <a href="#">Portfolio Wide Block v2</a>
              </li>
              <li>
                <a href="#">Portfolio Details</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="menu-link">
              blog
            </a>
            <ul className="submenu-general submenu-right  shadow">
              <li>
                <a href="#">Blog Grid 1</a>
              </li>
              <li>
                <a href="#">Blog Grid 2</a>
              </li>
              <li>
                <a href="#">Blog Right Sidebar</a>
              </li>
              <li>
                <a href="#">Blog Left Sidebar</a>
              </li>
              <li>
                <a href="#">Blog Single</a>
              </li>
            </ul>
          </li>
        </ul>
        {/* contact-nav */}
        <ul>
          <li>
            <a className="phone shadow" href="#">
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </li>
          <li>
            <a className="quote shadow" href="#">
              Request a quote
            </a>
          </li>
        </ul>
      </div>

      {/* mobile navbar */}
      <ul className="mb-navbar-btn">
        <li>
          <a className="phone shadow" href="#">
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
          </a>
        </li>
        <li>
          <label for="mb-toggle-menu" className="mb-navbar-btn">
            <FontAwesomeIcon icon={faBars} size="2x" />
          </label>
        </li>
      </ul>

      <input
        className="toggle-input"
        hidden
        type="checkbox"
        id="mb-toggle-menu"
      />
      <label for="mb-toggle-menu" className="mb-overlay"></label>
      <div className="mb-menu-navbar">
        <div className="mb-title">
          <h2>Niwax Menu</h2>
          <label for="mb-toggle-menu" className="mb-close-menu">
            <FontAwesomeIcon icon={faXmark} size="2x" />
          </label>
        </div>
        <ul>
          <li>
            <div className="mb-nav-container">
              <a className="mb-menu-link">Home</a>
              <span>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </div>
            <div></div>
          </li>
          <li>
            <label for="toggle-pages-submenu" className="mb-nav-container">
              <a className="mb-menu-link">Pages</a>
              <span>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </label>
            <input id="toggle-pages-submenu" type="checkbox" hidden />
            <ul className="mb-submenu">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Why us</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Team Single</a>
              </li>
              <li>
                <a href="#">Case Study</a>
              </li>
              <li>
                <a href="#">Case Study Single</a>
              </li>
              <li>
                <a href="#">Mission & Vision</a>
              </li>
              <li>
                <a href="#">Development Process</a>
              </li>
              <li>
                <a href="#">Client Review</a>
              </li>
              <li>
                <a href="#">Ours Clients</a>
              </li>
              <li>
                <a href="#">Contact US</a>
              </li>
              <li>
                <a href="#">Contact Us 2</a>
              </li>
              <li>
                <a href="#">Login Page</a>
              </li>
              <li>
                <a href="#">Service Card</a>
              </li>
              <li>
                <a href="#">Service Web</a>
              </li>
              <li>
                <a href="#">Service Mobile App</a>
              </li>
              <li>
                <a href="#">Service Digital Marketing</a>
              </li>
              <li>
                <a href="#">Service Graphic</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Shop Single</a>
              </li>
              <li>
                <a href="#">Shop Details</a>
              </li>
              <li>
                <a href="#">Shop Cart</a>
              </li>
            </ul>
          </li>
          <li>
            <label for="toggle-shortcodes-submenu" className="mb-nav-container">
              <a className="mb-menu-link">Shortcodes</a>
              <span>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </label>
            <input id="toggle-shortcodes-submenu" type="checkbox" hidden />
            <ul className="mb-submenu">
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">typography</a>
              </li>
              <li>
                <a href="#">Buttons</a>
              </li>
              <li>
                <a href="#">Office Location</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">404 Page</a>
              </li>
              <li>
                <a href="#">Background Gradients</a>
              </li>
              <li>
                <a href="#">Header v1</a>
              </li>
              <li>
                <a href="#">Header v2</a>
              </li>
              <li>
                <a href="#">Header v3</a>
              </li>
              <li>
                <a href="#">Footer</a>
              </li>
              <li>
                <a href="#">Hover Animation</a>
              </li>
              <li>
                <a href="#">Popup Modal</a>
              </li>
              <li>
                <a href="#">List</a>
              </li>
              <li>
                <a href="#">Bootstrap Components</a>
              </li>
            </ul>
          </li>
          <li>
            <label for="toggle-portfolio-submenu" className="mb-nav-container">
              <a className="mb-menu-link">Portfolio</a>
              <span>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </label>
            <input id="toggle-portfolio-submenu" type="checkbox" hidden />
            <ul className="mb-submenu">
              <li>
                <a href="#">Portfolio Grid 1</a>
              </li>
              <li>
                <a href="#">Portfolio Grid 2</a>
              </li>
              <li>
                <a href="#">Portfolio Wide Block</a>
              </li>
              <li>
                <a href="#">Portfolio Wide Block v2</a>
              </li>
              <li>
                <a href="#">Portfolio Details</a>
              </li>
            </ul>
          </li>
          <li>
            <label for="toggle-blog-submenu" className="mb-nav-container">
              <a className="mb-menu-link">Blog</a>
              <span>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </label>
            <input id="toggle-blog-submenu" type="checkbox" hidden />
            <ul className="mb-submenu">
              <li>
                <a href="#">Blog Grid 1</a>
              </li>
              <li>
                <a href="#">Blog Grid 2</a>
              </li>
              <li>
                <a href="#">Blog Right SideBar</a>
              </li>
              <li>
                <a href="#">Blog Left Sidebar</a>
              </li>
              <li>
                <a href="#">Blog Single</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
