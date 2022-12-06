import Link from "next/link";
import { client } from "../libs/client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.scss";

export default function Home({ blog }: {blog:any}) {
  return (
    <div>
      <Header />
      <main className={`${styles.inner} ${styles.main}`}>
        <ul>
          {blog.map((blog: any) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
