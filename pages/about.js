import Link from 'next/link';
import Layout from "../components/layout";
import { getPostBySlug } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import styles from '../styles/about.module.css';

export default function About({ title, content }) {
  return (
    <Layout title={title}>
      <section className={styles.wrapper}>
        <h1 className={styles.h1}>
          { title }
        </h1>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }}></div>
        <Link href="/">
          <a className={styles.link}>Return to home</a>
        </Link>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const post = getPostBySlug('', 'about');
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      ...post,
      content,
    },
  };
}
