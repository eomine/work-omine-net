import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import { getPostBySlug, getPostsSlugs } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import styles from '../../styles/work.module.css';

export default function Work({ images, tech, title, content }) {
  return (
    <Layout title={title}>
      <section className={styles.wrapper}>
        <h1 className={styles.h1}>
          { title }
        </h1>
        <div className="mb-8">
          { tech.map(item => <span key={item} className="mr-4">{ item }</span>) }
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }}></div>
        <div className={styles.gallery}>
          {
            images.map(image => (
              <img key={image} alt="" src={`/${image}`}/>
            ))
          }
        </div>
        <Link href="/">
          <a className={styles.link}>Return to home</a>
        </Link>
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
