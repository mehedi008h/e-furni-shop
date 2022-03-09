import React from "react";
import styles from "./Banner.module.css";
import banner_bg from "../../assets/banner_bg.jpg";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className={styles.effect_1}></div>
        <div className={styles.effect_2}>
          <BsFillArrowDownCircleFill size={30} />
        </div>
        <div className={styles.banner_text}>
          <h1>We Help You To Make Modern Interior</h1>
          <p className="mt-3">
            We will help you to make an elegant and luxurious interior designed
            by professional interior designer.
          </p>
        </div>
        <div className={styles.banner_img}>
          <img src={banner_bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
