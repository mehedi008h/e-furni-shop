import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { motion } from "framer-motion";
import Product from "./Product";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  // load data
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setFilterProduct(data);
      });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterProduct(product);
      } else {
        setFilterProduct(product.filter((items) => items.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <div className={styles.products}>
      <div className="container">
        <div className={styles.product_header}>
          <h1>Products</h1>
          <button>See All</button>
        </div>
        <div className={styles.product_filter}>
          {["All", "Sofa", "Chair", "Light"].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`${styles.product_filter_item} ${
                activeFilter === item ? `${styles.item_active}` : ""
              } `}
            >
              {item}
            </div>
          ))}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          <div className="row g-3">
            {filterProduct.map((product, index) => (
              <div className="col-md-4" key={index}>
                <Product product={product} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
