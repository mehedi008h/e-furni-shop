import React from "react";
import images from "../../constants/images";
import styles from "./Client.module.css";
import { BsBookmarkStar } from "react-icons/bs";

const Client = () => {
  return (
    <div className={styles.client}>
      <div className={`container ${styles.container}`}>
        <div className={styles.effect_1}>
          <BsBookmarkStar size={25} />
        </div>
        <div className={styles.client_header}>
          <h1>
            What Our <br />
            Happy Client Says
          </h1>
          <p>
            File storage made easy – including powerful features you won’t find
            anywhere else. Whether you’re.
          </p>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="col-md-8 col-offset-md-4 mx-auto">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="me-auto">
                    <img
                      style={{
                        height: "300px",
                        width: "250px",
                        objectFit: "cover",
                      }}
                      src={images.furi_2}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={`${styles.review} ms-auto`}>
                    <h5>Furni.shop</h5>
                    <h4>
                      File storage made easy – including powerful features you
                      won’t find anywhere else. Whether you’re.
                    </h4>
                    <div className={`${styles.client_info} mt-4`}>
                      <h5>Mehedi Hasan</h5>
                      <p>Student</p>
                    </div>
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

export default Client;
