import React, { useEffect, useState } from "react";
import styles from "./Client.module.css";
import { BsBookmarkStar } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  // load data
  useEffect(() => {
    fetch("./client.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      });
  }, []);
  return (
    <div className={styles.client}>
      <div className={`container mt-5 mb-5 ${styles.container}`}>
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
        {testimonials.length && (
          <div className="mt-5">
            <div className="row">
              <div className="col-md-8 col-offset-md-4 mx-auto">
                <div className={styles.feedback}>
                  <div className="text-center">
                    <img
                      className={styles.feedback_image}
                      src={testimonials[currentIndex].image}
                      alt=""
                    />
                  </div>
                  <div className={`${styles.review} ms-3`}>
                    <h5>Furni.shop</h5>
                    <h4>{testimonials[currentIndex].feedback}</h4>
                    <div className={`${styles.client_info} mt-4`}>
                      <h5>{testimonials[currentIndex].name}</h5>
                      <p>{testimonials[currentIndex].work}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <div
                  className={styles.arrow}
                  onClick={() =>
                    handleClick(
                      currentIndex === 0
                        ? testimonials.length - 1
                        : currentIndex - 1
                    )
                  }
                >
                  <AiOutlineArrowLeft size={20} />
                </div>
                <div
                  className={styles.arrow}
                  onClick={() =>
                    handleClick(
                      currentIndex === testimonials.length - 1
                        ? 0
                        : currentIndex + 1
                    )
                  }
                >
                  <AiOutlineArrowRight size={20} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Client;
