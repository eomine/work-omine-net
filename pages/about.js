import Link from 'next/link';
import Layout from "../components/layout";
import { getPostBySlug } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import common from '../styles/common.module.css';

export default function About({ title, content }) {
  return (
    <Layout title={title}>
      <section className={common.main}>
        <Link href="/" className={common.link}>
          &larr; Home
        </Link>
        <div className="h-8"></div>
        <h1 className={common.h1}>
          { title }
        </h1>
        <div className={common.content} dangerouslySetInnerHTML={{ __html: content }}></div>
        <Link href="/" className={common.link}>
          &larr; Home
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
