import Link from 'next/link';
import Layout from '../../components/layout';
import { getPostBySlug, getPostsSlugs } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import styles from '../../styles/Work.module.css';

export default function Work({ title, content }) {
  return (
    <Layout title={title}>
      <section className="px-6 py-12 md:p-24 xl:p-40 dark:bg-gray-900">
        <div className="max-w-4xl">
          <h1 className="mb-8 text-xl md:text-3xl xl:text-5xl text-gray-400">
            { title }
          </h1>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }}></div>
          <Link href="/">
            <a className="text-gray-300 text-base md:text-lg xl:text-xl tracking-widest uppercase">Return to home</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug('works', params.slug);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      ...post,
      content,
    },
  };
}

export async function getStaticPaths() {
  const slugs = getPostsSlugs('works');

  return {
    paths: slugs.map(slug => {
      return {
        params: {
          slug: slug,
        },
      }
    }),
    fallback: false,
  };
}
