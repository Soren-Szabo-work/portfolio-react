import Header from "../components/Header";
import styles from "../styles/Custom404.module.css";

export default function Custom404() {
  return (
    <div id="wrapper">
      <Header></Header>
      <div id={styles.container}>
        <div>
          <h1 className={styles.error}>404</h1>
          <div>
            <h2>This page could not be found.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
