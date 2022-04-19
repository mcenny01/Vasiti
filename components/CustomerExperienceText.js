import React from "react";
import styles from "../styles/CustomerExperience.module.css";
import Image from "next/image";

function CustomerExperienceText({ name, img, user, testimonial, color }) {
  return (
    <div className={styles.customerExperienceText}>
      <div>
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <h5
          className={
            color === "dark"
              ? "text-sm flex justify-center items-center border-gray-200 ring-white w-24 ring-1 px-2 py-1 rounded mb-10 font-medium"
              : "text-sm flex justify-center items-center border-orange-500 ring-orange-600 w-24 ring-1 px-2 py-1 rounded mb-10 text-orange-600 font-medium"
          }
        >
          {user}
        </h5>
        <p className="mb-12">{testimonial}</p>
        <div className={styles.ctaLink}>
        <h5
          className={
            color === "dark"
              ? "uppercase font-medium tracking-widest"
              : "uppercase font-medium tracking-widest text-orange-600"
          }
        >
          Share your own story!
        </h5>
        <Image src="https://drive.google.com/uc?export=view&id=1qcqAiTt_RZgYMyi_GststW36ceJsYbzj" alt="" className={styles.mark} width={295} height={10} objectFit="contain"/>
        </div>
      </div>
    </div>
  );
}

export default CustomerExperienceText;

// width={295} height={10}
