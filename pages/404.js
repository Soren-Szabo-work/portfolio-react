import Link from "next/link";
import styles from "../styles/Custom404.module.css";
import useCursorHandlers from "../utils/useCursorHandlers";

export default function Custom404() {
  const cursorHandlers = useCursorHandlers();

  return (
    <div id="wrapper">
      <div id={styles.container}>
        <div>
          <h1 className={styles.error}>404</h1>
          <div>
            <h2>This page could not be found.</h2>
          </div>
        </div>
        <Link href="/" className="link-underlined" {...cursorHandlers}>
          Home
        </Link>
      </div>
    </div>
  );
}
