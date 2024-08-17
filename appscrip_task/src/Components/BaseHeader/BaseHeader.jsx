import React from "react";
import styles from "./BaseHeader.module.css";

const BaseHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.mainHeading}>DISCOVER OUR PRODUCTS</div>
        <div className={styles.subHeading}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </div>
      </div>
    </div>
  );
};

export default BaseHeader;
