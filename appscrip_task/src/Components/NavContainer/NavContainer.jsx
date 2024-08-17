import React, { useState } from "react";
import styles from "./NavContainer.module.css";

const NavContainer = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <div>SHOP</div>
        <div>SKILLS</div>
        <div>STORIES</div>
        <div>ABOUT</div>
        <div>CONTACT US</div>
      </div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      <div className={`${styles.navMenu} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.navLinks}>
          <div>SHOP</div>
          <div>SKILLS</div>
          <div>STORIES</div>
          <div>ABOUT</div>
          <div>CONTACT US</div>
        </div>
      </div>
      <div className={styles.hr} />
    </div>
  );
};

export default NavContainer;
