import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const footerStyle = {
  position: "relative",
  bottom: 0,
  width: "100%",
  backgroundColor: "#333",
  color: "white",
  padding: "15px 0",
};

const Footer = () => (
  <footer
    className="page-footer font-small bg-dark text-white pt-4"
    style={footerStyle}
  >
    {/* Footer Content Section */}
    <div className="footer-wrapper py-4 container text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">About the Email Signature Generator</h5>
          <p>
            The Email Signature Generator is a tool designed to help students create professional email signatures. It allows you to enter your name, department, section, phone number, email, and social media profiles to generate a personalized email signature that you can use in your communications.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        {/* Links Section */}
        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                Home
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                About Us
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Follow Us</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                <span style={{ paddingRight: "5px" }}>
                  <FontAwesomeIcon icon={faFacebookF} />
                </span>{" "}
                Facebook
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                <span style={{ paddingRight: "5px" }}>
                  <FontAwesomeIcon icon={faInstagram} />
                </span>{" "}
                Instagram
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                <span style={{ paddingRight: "5px" }}>
                  <FontAwesomeIcon icon={faTwitter} />
                </span>{" "}
                Twitter
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                <span style={{ paddingRight: "5px" }}>
                  <FontAwesomeIcon icon={faPinterest} />
                </span>{" "}
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="bg-dark text-white text-center py-3">
      &copy; {new Date().getFullYear()} Sign-Ate. All rights reserved. |{" "}
      <a href="https://garvbhatt.github.io/Sign-Ate/" className="text-white">
      garvbhatt.github.io/Sign-Ate/
      </a>
    </div>
  </footer>
);

export default Footer;