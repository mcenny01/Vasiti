import React from "react";
import styles from "../styles/CustomerExperience.module.css";
import CustomerExperienceImageBox from "./CustomerExperienceImageBox";
import CustomerExperienceText from "./CustomerExperienceText";

function FirstCustomerExperienceCard({ name, img, user, testimonial, color }) {
  return (
    <div className={styles.customerExperienceContainer}>
      <div className={styles.customerExperienceWrapper}>
        <CustomerExperienceImageBox img={img} color={color} />
        <CustomerExperienceText
          name={name}
          user={user}
          testimonial={testimonial}
          color={color}
        />
      </div>
    </div>
  );
}

export default FirstCustomerExperienceCard;
