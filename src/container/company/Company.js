import React from "react";
import styles from "./Company.module.css";
import images from "../../constants/images";

const Company = () => {
  return (
    <div className={styles.company}>
      <div className="container text-center mt-4">
        <div className={styles.company_content}>
          <h4>Trusted by over 1k company</h4>
          <div className={styles.company_logo}>
            <img src={images.adidas} alt="" />
            <img src={images.amazon} alt="" />
            <img src={images.asus} alt="" />
            <img src={images.nb} alt="" />
            <img src={images.spotify} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
