import React from "react";
import styles from "./Company.module.css";
import adidas from "../../assets/adidas.png";
import amazon from "../../assets/amazon.png";
import asus from "../../assets/asus.png";
import nb from "../../assets/nb.png";
import spotify from "../../assets/spotify.png";

const Company = () => {
  return (
    <div className={styles.company}>
      <div className="container text-center mt-4">
        <div className={styles.company_content}>
          <h4>Trusted by over 1k company</h4>
          <div className={styles.company_logo}>
            <img src={adidas} alt="" />
            <img src={amazon} alt="" />
            <img src={asus} alt="" />
            <img src={nb} alt="" />
            <img src={spotify} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
