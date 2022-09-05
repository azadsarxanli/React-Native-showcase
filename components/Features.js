import React from "react";
import assets from "../assets";
import Image from "next/image";
import { styles } from "../pages/_app";
const FeatureCard = ({ iconUrl, iconText }) => {
  return (
    <div className={styles.featureCard}>
      <Image src={iconUrl} alt="icon" className={styles.featureImg} />
      <p className={styles.featureText}> {iconText}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            ProNef has been developed using a cross-platform technology stack
            that is scalable, secure, and reliable.
          </p>
        </div>
        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript} iconText="Javascript" />
        </div>
      </div>
    </div>
  );
};

export default Features;
