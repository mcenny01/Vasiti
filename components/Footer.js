import React from "react";
import styles from "../styles/Footer.module.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className="w-52">
          <h1 className={styles.headerOne}>Company</h1>
          <ul className={styles.list}>
            <li className={styles.link}>About us</li>
            <li className={styles.link}>Term of Use</li>
            <li className={styles.link}>Privacy Policy</li>
            <li className={styles.link}>Press & Media</li>
          </ul>
        </div>
        <div className="w-52">
          <h1 className={styles.headerOne}>Products</h1>
          <ul className={styles.list}>
            <li className={styles.link}>Marketplace</li>
            <li className={styles.link}>Magazine</li>
            <li className={styles.link}>Seller</li>
            <li className={styles.link}>Wholesale</li>
            <li className={styles.link}>Services</li>
          </ul>
        </div>
        <div className="w-52">
          <h1 className={styles.headerOne}>Careers</h1>
          <ul className={styles.list}>
            <li className={styles.link}>Become a Campus Rep</li>
            <li className={styles.link}>Become a Vasiti Influencer</li>
            <li className={styles.link}>Become a Campus writer</li>
            <li className={styles.link}>Become an Affiliate</li>
          </ul>
        </div>
        <div className="w-52">
          <h1 className={styles.headerOne}>Get in touch</h1>
          <ul className={styles.list}>
            <li className={styles.link}>Contact us</li>
            <li className={styles.link}>Partner with us</li>
            <li className={styles.link}>Advertise with us</li>
            <li className={styles.link}>Help/FAQs</li>
          </ul>
        </div>
        <div className="w-52">
          <h1 className={styles.headerOne}>Join our community</h1>
          <div className={styles.icons}>
          {/* <i class="bi bi-facebook" ></i> */}
          <BsFacebook/>
          {/* <i class="bi bi-instagram" ></i> */}
          <BsInstagram/>
          {/* <i class="bi bi-twitter" ></i> */}
          <BsTwitter />
          {/* <i class="bi bi-linkedin" ></i> */}
          <BsLinkedin />
          </div>
          <p>Email Newsletter</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
