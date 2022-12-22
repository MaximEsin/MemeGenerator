import React, { useState } from "react";
import styles from "../styles/Components.module.scss";
import memesData from "../data/memesData";

const Form = () => {
  const [image, setImage] = useState("https://i.imgflip.com/3si4.jpg");
  const [firstText, setFirstText] = useState("Shut up");
  const [secondText, setSecondText] = useState("and take my money");
  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * memesData.length);
    setImage(memesData[randomNumber].url);
  };

  return (
    <section className={styles.form__wrapper}>
      <div className={styles.form__container}>
        <form className={styles.form__input__container}>
          <input
            onChange={(e) => setFirstText(e.target.value)}
            type="text"
            placeholder="Top text"
            className={styles.form__input}
          />
          <input
            onChange={(e) => setSecondText(e.target.value)}
            type="text"
            placeholder="Bottom text"
            className={styles.form__input}
          />
        </form>
        <button onClick={getMemeImage} className={styles.form__button}>
          Get a new meme image 🖼
        </button>
      </div>
      <section className={styles.form__meme__container}>
        <img className={styles.form__meme} src={image} alt="Click button" />
        <p className={styles.form__text__one}>{firstText}</p>
        <p className={styles.form__text__two}>{secondText}</p>
      </section>
    </section>
  );
};

export default Form;
