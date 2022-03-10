import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-between">
          <h1 className={styles.footer_header}>
            Start your business today for <br />
            $0+ state fees.
          </h1>
          <div className={styles.footer_btn}>
            <button>Get Started</button>
            <button>Contact Sales</button>
          </div>
        </div>
        <hr className="mt-5 mb-5 text-white" />
        <div className="row">
          <div className="col-md-4">
            <div className={styles.company_info}>
              <h4 className="text-white">firni.shop</h4>
              <p className="mt-4">
                Optix seamlessly connects your members with the community,
                resources.
              </p>
              <span>
                <div className={styles.icon}>
                  <FaFacebookF
                    style={{ marginRight: "0.5rem" }}
                    color="white"
                    size={25}
                  />
                  <FaTwitter
                    style={{ margin: "0.5rem" }}
                    color="white"
                    size={25}
                  />
                  <FaInstagram
                    style={{ margin: "0.5rem" }}
                    color="white"
                    size={25}
                  />
                  <FaLinkedinIn
                    style={{ margin: "0.5rem" }}
                    color="white"
                    size={25}
                  />
                </div>
              </span>
            </div>
          </div>
          <div className="col-md-2">
            <div className={styles.company_details}>
              <h5>Entity types</h5>
              <p>Knowledge</p>
              <p>Security</p>
              <p>Privacy Policy</p>
              <p>Partners</p>
              <p>About Us</p>
              <p>FAQs</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className={styles.company_details}>
              <h5>Entity types</h5>
              <p>Knowledge</p>
              <p>Security</p>
              <p>Privacy Policy</p>
              <p>Partners</p>
              <p>About Us</p>
              <p>FAQs</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className={styles.company_details}>
              <h5>Entity types</h5>
              <p>Knowledge</p>
              <p>Security</p>
              <p>Privacy Policy</p>
              <p>Partners</p>
              <p>About Us</p>
              <p>FAQs</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className={styles.company_details}>
              <h5>Entity types</h5>
              <p>Knowledge</p>
              <p>Security</p>
              <p>Privacy Policy</p>
              <p>Partners</p>
              <p>About Us</p>
              <p>FAQs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
