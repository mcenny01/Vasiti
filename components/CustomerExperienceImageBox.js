import React from "react";
import styles from "../styles/CustomerExperience.module.css";

function CustomerExperienceImageBox({name, img, user, testimonial, color}) {
  return (
    <div className={styles.customerExperienceImageBox}>
      <div className={color ==='dark' ? styles.customerExperienceCircle : styles.customerExperienceCircleLight}></div>
      <img src={img} alt="" className={styles.customerExperienceImage} />
    </div>
  );
}

export default CustomerExperienceImageBox;
