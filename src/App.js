import React from "react";
import "./styles/normalize.css";
import styles from "./styles/App.module.scss";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <div className={styles.App__wrapper}>
      <Header />
      <Form />
    </div>
  );
}

export default App;
