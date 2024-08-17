import React from "react";
import styles from "./Footer.module.css";
import { SVG } from "../../Constants/SvgConstant";
import { METTā_MUSE, Quick_Links } from "../../Constants/WordConstatnt";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.text1}>Be the first to know</div>
          <div className={styles.text2}>
            Sign up for updates from mettā muse.
          </div>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Enter your email..."
              className={styles.inputEmail}
            />
            <button type="submit" className={styles.button}>
              Subscribe
            </button>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.text3}>CONTACT US</div>
          <div className={styles.text4}>+44 221 133 5360</div>
          <div className={styles.text5}>customercare@mettamuse.com</div>
          <div className={styles.text6}>CURRENCY</div>
          <div className={styles.country}>
            <img className={styles.usImage} src={SVG.US} alt="US Logo" />
            <div className={styles.text8}>+ USD</div>
          </div>
          <div className={styles.text7}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </div>
        </div>
      </div>
      <div className={styles.hr} />
      <div className={styles.bottomContainer}>
        <div className={styles.bottomLeftContainer}>
          <div className={styles.text9}>METTā MUSE</div>
          {METTā_MUSE.map((item, index) => (
            <div key={index} className={styles.text10}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.bottomMiddleContainer}>
          <div className={styles.text9}>Quick Links</div>
          {Quick_Links.map((item, index) => (
            <div key={index} className={styles.text10}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.bottomRightContainer}>
          <div className={styles.text9}>Follow Us</div>
          <div className={styles.social}>
            <img
              className={styles.instagramImage}
              src={SVG.Instagram}
              alt="Instagram logo"
            />
            <img
              className={styles.linkedInImage}
              src={SVG.LinkedIn}
              alt="LinkedIn logo"
            />
          </div>
          <div className={styles.text9}>mettā muse Accepts</div>
          <div className={styles.social}>
            <img className={styles.GPayImage} src={SVG.GPay} alt="GPay logo" />
            <img
              className={styles.masterCardImage}
              src={SVG.MasterCard}
              alt="MasterCard logo"
            />
            <img
              className={styles.payPalImage}
              src={SVG.PayPal}
              alt="PayPal logo"
            />
            <img className={styles.amexImage} src={SVG.Amex} alt="Amex logo" />
            <img
              className={styles.applePayImage}
              src={SVG.ApplePay}
              alt="ApplePay logo"
            />
            <img className={styles.payImage} src={SVG.Pay} alt="Pay logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
