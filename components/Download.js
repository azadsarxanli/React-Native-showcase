import React from "react";
import { styles } from "../pages/_app";
import assets from "../assets";
import Image from "next/image";
const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Download the Source Code
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Get the full source code on Github.
          </p>
        </div>
        <button className={`${styles.btnPrimary}`}>Source Code</button>
        <div className={`${styles.flexCenter}`}>
          <Image
            className={styles.fullImg}
            src={assets.scene}
            alt="download_png"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
