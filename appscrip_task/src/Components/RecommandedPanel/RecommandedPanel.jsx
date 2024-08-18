import React from "react";
import styles from "./RecommandedPanel.module.css";
import { Sort_Options } from "../../Constants/WordConstatnt";

const RecommandedPanel = () => {
  return (
    <div className={styles.panelContainer}>
      <button className={styles.panelButton}>Hide Filter</button>
      <div className={styles.hr} />
      <div className={styles.optionsList}>
        <select className={styles.selectMenu}>
          {Sort_Options.map((option, index) => (
            <option key={index} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RecommandedPanel;
