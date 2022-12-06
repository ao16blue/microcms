import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";

export default function BlogId({ blog }: { blog: any }) {
  return (
    <div>
      <Header />
      <main className={`${styles.inner} ${styles.main}`}>
        <h1 className={styles.title}>{blog.title}</h1>
        <div className={styles.bloginfo}>
          <p className={styles.category}>{blog.category && `${blog.category.name}`}</p>
          <p className={styles.publishedAt}>{blog.publishedAt}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
          className={styles.post}
        />
      </main>
      <Footer />
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
