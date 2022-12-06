import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.scss";

export default function Custom404() {
  return (
    <div>
      <Header />
      <main className={`${styles.inner} ${styles.main}`}>
        <p>ページがありません。</p>
      </main>
      <Footer />
    </div>
  );
}
