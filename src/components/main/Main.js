import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import { OfficeCard } from "./OfficeCard";

export const Main = () => {
  const office = [
    { imgUrl: "../../../images/location/newyork.png", city: "New York", address: "603 FA Forest Avenue, New York, USA 10021" },
    { imgUrl: "../../../images/location/newyork.png", city: "Sydney", address: "2449 Columbia Boulevard, Sydney, 10021" },
    { imgUrl: "../../../images/location/newyork.png", city: "Rome", address: "9988 Piazzetta Scalette Rubiani 99, Rome, 84090" },
  ];
  return (
    <>
      <section className="banner item-center">
        <div className="link-banner">
          <a href="#">Home</a> &nbsp; <a href="#">Contact</a>
        </div>
        <h1>Contact</h1>
      </section>
      {/* <!-- body-1 --> */}
      <section className="container body-1">
        <div className="row">
          {/* <!-- left side --> */}
          <div className="col-md-12 col-lg-6 py-5">
            <div className="bd1-content">
              <div className="pink-upper">contact now</div>
              <div className="blue-large">Have Question? Write a Message</div>
              <p className="grey-text" style={{ marginBottom: "50px" }}>
                We will catch you as early as we receive the message
              </p>
            </div>
            <form className="form">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter name"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter mobile"
                  />
                </div>
                <div className="col">
                  <select
                    id="inputState"
                    className="form-input"
                    style={{ height: "50px" }}
                  >
                    <option value="">Select Requirement</option>
                    <option value="web">web</option>
                    <option value="graphic">graphic</option>
                    <option value="video">video</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <textarea
                    name=""
                    id=""
                    className="form-input"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button type="button">Submit</button>
                </div>
              </div>
            </form>
          </div>
          {/* <!-- right side  --> */}
          <div className="col-md-12 col-lg-5 py-5">
            <div
              className="info shadow grey-text"
              style={{ background: "rgb(255, 248, 242)" }}
            >
              <div>
                <FontAwesomeIcon icon={faPhone} />
                &nbsp; Phone:
              </div>
              <p>Assistance hours: Monday – Friday, 9 am to 5 pm</p>
              <a href="#" className="grey-text">
                (+91) 0000 000 000
              </a>
            </div>
            <div
              className="info shadow grey-text"
              style={{ background: "#ffecec" }}
            >
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp; Email:
              </div>
              <p>
                Our support team will get back to in 24-h during standard
                business hours.
              </p>
              <a href="" className="grey-text">
                info@businessname.com
              </a>
            </div>
            <div
              className="info shadow grey-text"
              style={{ background: "#eafffd" }}
            >
              <div>
                <FontAwesomeIcon icon={faSkype} />
                &nbsp; Skype:
              </div>
              <p>We Are Online: Monday – Friday, 9 am to 5 pm</p>
              <a href="" className="grey-text">
                niwax.company
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- body-2 --> */}
      <section className="body-2" style={{ background: "#fbfbfb" }}>
        <div className="container">
          <div className="item-center" style={{ marginBottom: "50px" }}>
            <div className="pink-upper">OUR LOCATIONS</div>
            <div className="blue-large">Our office</div>
          </div>
          <div className="row">
            {office ? office.map((item, index) =>{
              return (
                <OfficeCard key={index} imgUrl={item.imgUrl} city={item.city} address={item.address}  />
              )
            }) : null}
          </div>
        </div>
      </section>
      {/* <!-- body-3 --> */}
      <div className="body-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6 bd3-content">
              <div
                style={{
                  color: "#050748",
                  fontSize: "35px",
                  fontWeight: "700",
                }}
              >
                Get New Insights Weekly
              </div>
              <p className="">
                News letter dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Enter your email
              </p>
            </div>
            <div className="col-md-12 col-lg-6">
              <form action="" className="form-2 shadow">
                <input type="text" placeholder="Enter Your Address" />
                <button type="button">
                  Subcribe&nbsp;
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
