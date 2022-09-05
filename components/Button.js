import Image from "next/image";
import React from "react";
import expo from "../assets/expo.png";
import { styles } from "../pages/_app";
const Button = ({ assetUrl, link }) => {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className={styles.btnBlack}
    >
      <Image
        width={20}
        height={20}
        src={assetUrl}
        className={styles.btnIcon}
        alt="expo"
      />
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
        <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
      </div>
    </div>
  );
};

export default Button;
