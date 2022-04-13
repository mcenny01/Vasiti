import React from "react";
import styles from "../styles/Testimonial.module.css";

function TestimonialCard({ img, name, location, user, testimonial }) {
  return (
    <div className={styles.testimonialContainer}>
      <div className="w-72">
        <img src={`${img}`} alt="" className="w-50 h-50 mb-8" />
        <div>
          <h1 className="text-2xl font-semibold mb-2">{name}</h1>
          <div className="flex mb-6">
            {location && <span className="mr-4">{location}</span>}
            <span
              className={
                user === "CUSTOMER" ? styles.customerUser : styles.vendorUser
              }
            >
              {user}
            </span>
          </div>
        </div>
        <p>{testimonial}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
