import React from "react";
import Image from "next/image";
import assets from "../assets";
import Button from "./Button";
import { styles } from "../pages/_app";
const SectionWrapper = ({
  title,
  description,
  mockupImg,
  showBtn,
  banner,
  reverse,
}) => {
  return (
    <section
      className={`min-h-screen  ${styles.section}
       ${reverse ? styles.bgWhite : styles.bgPrimary}

        ${banner}`}
    >
      <div
        className={`flex flex-items-center 1
         ${reverse ? styles.boxReverseClass : styles.boxClass}
          w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} 
          ${reverse ? "fadeRightMini" : "fadeLeftMini"}
          ${reverse ? styles.textRight : styles.textLeft}
          `}
        >
          <h1
            className={`
          ${styles.h1Text}
          ${reverse ? styles.blackText : styles.whiteText}
          
          `}
          >
            {title}
          </h1>
          <p
            className={`${styles.descriptionText} ${
              reverse ? styles.blackText : styles.whiteText
            } `}
          >
            {" "}
            {description}
          </p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="https://expo.dev/@azadsarxanli/ReactNative_NFT?serviceType=classic&distribution=expo-go"
            />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <Image
            className={`${styles.sectionImg} ${
              reverse ? "fadeLeftMini" : "fadeRightMini"
            } `}
            src={mockupImg}
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
