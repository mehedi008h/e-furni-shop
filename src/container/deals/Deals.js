import React from "react";
import { ImFire } from "react-icons/im";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiOutlineCash } from "react-icons/hi";
import { MdToday } from "react-icons/md";
import styles from "./Deals.module.css";

const Deals = () => {
  return (
    <div className={styles.deals}>
      <div className="container">
        <div className="row g-3">
          <div className="col-md-4">
            <div className={styles.deals_text}>
              <h4>
                Hot
                <span className="ms-3">
                  <ImFire style={{ color: "red" }} />
                </span>
                <br />
                deals for you
              </h4>
              <p>Online shopping for retail sales direct to consumers</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row g-3">
              <div className="col-md-4">
                <div className={styles.deals_item}>
                  <HiOutlineCash size={30} />
                  <h5>3.5% cashback</h5>
                  <p>Online shopping for retail sales direct to consumers</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.deals_item}>
                  <MdToday size={30} />
                  <h5>30-day terms</h5>
                  <p>Online shopping for retail sales direct to consumers</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.deals_item}>
                  <RiMoneyDollarCircleLine size={30} />
                  <h5>Save Money</h5>
                  <p>Online shopping for retail sales direct to consumers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
