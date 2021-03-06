import React from "react";
import furi_1 from "../../assets/furni 1.jpg";
import furi_2 from "../../assets/furni 2.jpg";
import furi_3 from "../../assets/furni 3.jpg";
import furi_4 from "../../assets/furni 4.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className={styles.about_text}>
            <h2>About Us</h2>
            <p>
              At Besnik Consultancy, we take pride in our values – service,
              integrity, and excellence.
            </p>
          </div>
          <button className={styles.btn}>Learn more</button>
        </div>
        <div>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className={styles.about_content}>
                    <h1>1 .</h1>
                    <h4>Who we are</h4>
                    <p>
                      You get a 2-week free trial to kick the Smarty tries. We
                      want you to.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.about_content}>
                    <h1>2 .</h1>
                    <h4>What Do We Do</h4>
                    <p>
                      We give you a free course that guides you through the
                      process.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.about_content}>
                    <h1>3 .</h1>
                    <h4>How Do We Help</h4>
                    <p>
                      Use our multimedia lecturers, videos, and coaching
                      sessions.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.about_content}>
                    <h1>4 .</h1>
                    <h4>Create success story</h4>
                    <p>
                      With access to online learning resources anyone can
                      transfrm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md-6 ${styles.image_sm}`}>
              <div className="row">
                <div className="col-md-6 mt-4">
                  <div className="d-flex align-items-center flex-column">
                    <img style={{ margin: "5px" }} src={furi_1} alt="" />
                    <img style={{ margin: "5px" }} src={furi_2} alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center flex-column">
                    <img style={{ margin: "5px" }} src={furi_4} alt="" />
                    <img style={{ margin: "5px" }} src={furi_3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
