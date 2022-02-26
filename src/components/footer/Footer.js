import {
  faBehance,
  faDribbble,
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faPinterestP,
  faTwitter,
  faVimeoV,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      {/* <!-- footer-1 --> */}
      <div className="footer-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="f1-title">
                <img
                  src="images/logo.png"
                  alt="logo"
                  style={{ width: "100px" }}
                />
              </div>
              <p className="grey-text">
                News letter dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Enter your email
              </p>
              <a
                className="quote"
                style={{
                  lineHeight: "normal",
                  fontSize: "18px",
                  padding: "15px 25px",
                }}
              >
                Become Partner &nbsp;
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 contact">
              <div className="f1-title">Contact us</div>
              <ul className="">
                <li className="d-flex">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <div>
                    <div>Email</div>
                    <p>info@business.com</p>
                  </div>
                </li>
                <li className="d-flex">
                  <FontAwesomeIcon icon={faPhone} />
                  <div>
                    <div>Phone</div>
                    <p>+1 0000 000 000</p>
                  </div>
                </li>
                <li className="d-flex">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <div>
                    <div>Address</div>
                    <p>123 Business Centre London SW1A 1AA</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="f1-title">Company</div>
              <ul className="">
                <li>
                  <a className="navi-link" href="">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="navi-link" href="">
                    Customer's FAQ
                  </a>
                </li>
                <li>
                  <a className="navi-link" href="">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a className="navi-link" href="">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="navi-link" href="">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a className="navi-link" href="">
                    License & Copyright
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 blogs">
              <div className="f1-title">Latest Blogs</div>
              <ul className="">
                <li className="d-flex">
                  <img src="images/blog/blog-small.jpg" alt="" />
                  <div>
                    <span>
                      <FontAwesomeIcon icon={faClock} />
                      &nbsp; April 15, 2020
                    </span>
                    <p>We Provide you Best & Creative Consulting Service</p>
                  </div>
                </li>
                <li className="d-flex">
                  <img src="images/blog/blog-small.jpg" alt="" />
                  <div>
                    <span>
                      <FontAwesomeIcon icon={faClock} />
                      &nbsp; April 15, 2020
                    </span>
                    <p>We Provide you Best & Creative Consulting Service</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer-2 --> */}
      <div className="footer-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <span
                style={{
                  color: "#050748",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                Top App Development Companies
              </span>
              <p className="grey-text py-2">
                News letter dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Enter your email
              </p>
            </div>
            <img
              src="images/about/badges-a.png"
              className="f-img col-lg-2 col-md-3 col-sm-3"
            />
            <img
              src="images/about/badges-a.png"
              className="f-img col-lg-2 col-md-3 col-sm-3"
            />
            <img
              src="images/about/badges-a.png"
              className="f-img col-lg-2 col-md-3 col-sm-3"
            />
            <img
              src="images/about/badges-a.png"
              className="f-img col-lg-2 col-md-3 col-sm-3"
            />
          </div>
        </div>
      </div>
      <div className="footer-3 container">
        <div className="brand-list">
          <a>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a>
            <FontAwesomeIcon icon={faPinterestP} />
          </a>
          <a>
            <FontAwesomeIcon icon={faVimeoV} />
          </a>
          <a>
            <FontAwesomeIcon icon={faDribbble} />
          </a>
          <a>
            <FontAwesomeIcon icon={faBehance} />
          </a>
        </div>
        <p>© 2020-2022. All Rights Reserved By Rajesh Doot</p>
      </div>
    </footer>
  );
};
