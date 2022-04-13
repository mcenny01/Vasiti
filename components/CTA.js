import React from "react";
import styles from "../styles/CTA.module.css";

function CTA() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className="static">
          <img
            src="./images/subscribe-banner 1.png"
            alt=""
            className="relative -top-9 left-0"
          />
        </div>
        <div >
          <div className="w-96 pl-4 text-white mb-8 mt-20">
            <h1 className="text-4xl font-bold mb-4">
              Be a member <br /> of our community 🎉
            </h1>
            <p className="">
              We’d make sure you’re always first to know what’s happening on
              Vasiti—thus, the world.
            </p>
          </div>
          <div className="pl-4">
              <div className={styles.inputFrame}>
              <input type='text' placeholder='enter your email address' className={styles.input}/>
              <button className={styles.button}>SUBSCRIBE</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
