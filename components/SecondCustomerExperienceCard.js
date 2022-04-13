import React from "react";
import styles from "../styles/CustomerExperience.module.css";
import CustomerExperienceImageBox from "./CustomerExperienceImageBox";
import CustomerExperienceText from "./CustomerExperienceText";

function CustomerExperience({ name, img, user, testimonial, color }) {
  return (
    <div className={styles.customerExperienceContainerLight}>
      <div className={styles.customerExperienceWrapper}>
        <CustomerExperienceText
          name={name}
          user={user}
          testimonial={testimonial}
          color={color}
        />
        <CustomerExperienceImageBox img={img} color={color} />
      </div>
    </div>
  );
}

export default CustomerExperience;
