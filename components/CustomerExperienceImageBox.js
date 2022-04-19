import React from "react";
import styles from "../styles/CustomerExperience.module.css";
import Image from "next/image";
function CustomerExperienceImageBox({name, img, user, testimonial, color}) {
  return (
    <div className={styles.customerExperienceImageBox}>
      <div className={color ==='dark' ? styles.customerExperienceCircle : styles.customerExperienceCircleLight}></div>
      <Image src={img} alt="" className={styles.customerExperienceImage} width='617px' height='572px' objectFit="contain"/>
    </div>
  );
}

export default CustomerExperienceImageBox;
