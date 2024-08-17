import React from "react";
import styles from "./TopHeader.module.css";
import { SVG } from "../../Constants/SvgConstant";

const TopHeader = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={SVG.Logo} alt="logo" />
      <div className={styles.logo}>
        <div>LOGO</div>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.searchImage}
          src={SVG.Search}
          alt="Search Logo"
        />
        <img className={styles.heartImage} src={SVG.Heart} alt="Heart Logo" />
        <img
          className={styles.shoppingBagImage}
          src={SVG.ShoppingBag}
          alt="ShoppingBag logo"
        />
        <img
          className={styles.profileImage}
          src={SVG.Profile}
          alt="Profile logo"
        />
        <img
          className={styles.languageImage}
          src={SVG.Language}
          alt="Language logo"
        />
      </div>
    </div>
  );
};

export default TopHeader;
