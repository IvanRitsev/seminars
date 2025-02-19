import Image from "next/image";
import React from "react";
import LoaderIcon from "@/public/assets/icons/loader.svg";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className="content-container">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Загрузка...</h2>
        <Image
          className={styles.loader}
          src={LoaderIcon}
          width={150}
          height={150}
          alt="loader"
        />
      </div>
    </div>
  );
};

export default Loader;
