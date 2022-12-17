import React from "react";
import styles from "./Components.module.scss";
import troll from "../img/TrollFace.svg";

const Header = () => {
  return (
    <section className={styles.header__wrapper}>
      <section className={styles.header__container}>
        <img className={styles.header__icon} src={troll} alt="Troll Face" />
        <h1 className={styles.header__title}>Meme Generator</h1>
      </section>
    </section>
  );
};

export default Header;
