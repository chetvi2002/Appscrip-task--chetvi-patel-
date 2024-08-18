import React, { useState } from "react";
import styles from "./FilterPanel.module.css";
import { Filter_Options } from "../../Constants/WordConstatnt";
import UpArrow from "../../Svg/UpArrow";
import DownArrow from "../../Svg/DownArrow";

const FilterPanel = () => {
  const [isCustomizable, setIsCustomizable] = useState(false);
  const [openGroups, setOpenGroups] = useState({});

  const handleCheckboxChange = () => {
    setIsCustomizable((prevState) => !prevState);
  };

  const handleDropdownClick = (key) => {
    setOpenGroups((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className={styles.filterPanel}>
      <div className={styles.customizableContainer}>
        <input
          type="checkbox"
          id="customizable"
          checked={isCustomizable}
          onChange={handleCheckboxChange}
          className={styles.checkbox}
        />
        <label htmlFor="customizable" className={styles.checkboxLabel}>
          CUSTOMIZABLE
        </label>
      </div>
      {Object.entries(Filter_Options).map(([key, options]) => (
        <div key={key} className={styles.filterGroup}>
          <label
            htmlFor={key}
            className={`${styles.filterLabel} ${styles.dropdownLabel}`}
            onClick={() => handleDropdownClick(key)}
          >
            {key.toUpperCase()}
            <span className={styles.arrow}>
              {openGroups[key] ? <UpArrow /> : <DownArrow />}
            </span>
          </label>
          {openGroups[key] && (
            <div className={styles.checkboxContainer}>
              {options.map((option, index) => (
                <div key={index} className={styles.checkboxWrapper}>
                  <input
                    type="checkbox"
                    id={`${key}-${index}`}
                    className={styles.optionCheckbox}
                  />
                  <label
                    htmlFor={`${key}-${index}`}
                    className={styles.optionLabel}
                  >
                    {option.toUpperCase()}
                  </label>
                </div>
              ))}
            </div>
          )}
          <div className={styles.hr} />
        </div>
      ))}
    </div>
  );
};

export default FilterPanel;
