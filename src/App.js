import React from "react";
import "./styles/normalize.css";
import styles from "./styles/App.module.scss";
import Header from "./components/Header";

function App() {
  return (
    <div className={styles.App__wrapper}>
      <Header />
    </div>
  );
}

export default App;
