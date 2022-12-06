import styles from "../styles/Home.module.scss";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1>MicroCMS TEST</h1>
        <menu>
          <ul className={styles.globalmenu}>
            <li>
              <Link href="/">トップ</Link>
            </li>
            <li>
              <Link href="/blog/">ブログ</Link>
            </li>
          </ul>
        </menu>
      </div>
    </header>
  );
}

export default Header;
