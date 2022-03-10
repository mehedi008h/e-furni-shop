import React from "react";
import styles from "./Products.module.css";

const Product = ({ product }) => {
  return (
    <div className={styles.product_item} id="products">
      <div className={styles.product_img}>
        <img
          src={product.image}
          style={{ width: "150px", height: "150px" }}
          alt=""
        />
      </div>
      <h4 className="mt-3">{product.name}</h4>
      <div className={`d-flex justify-content-center ${styles.product_price}`}>
        <h5>$ {product.price.discount}</h5>
        <h5>$ {product.price.regular}</h5>
      </div>
    </div>
  );
};

export default Product;
