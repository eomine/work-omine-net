import Link from 'next/link';
import Layout from '../../components/layout';
import { getPostBySlug, getPostsSlugs } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import common from '../../styles/common.module.css';
import styles from '../../styles/work.module.css';

export default function Work({ images, tech, title, content }) {
  return (
    <Layout title={title}>
      <section className={common.main}>
        <Link href="/">
          <a className={common.link}>&larr; Home</a>
        </Link>
        <div className="h-8"></div>
        <h1 className={common.h1}>
          { title }
        </h1>
        <div className="mb-8">
          { tech.map(item => (
            <span key={item} className={common.tag}>
              { item }
            </span>
          )) }
        </div>
        <div className={common.content} dangerouslySetInnerHTML={{ __html: content }}></div>
        <div className="h-8"></div>
        <div className={styles.gallery}>
          {
            images.map(image => (
              <img key={image} alt="" src={`/${image}`}/>
            ))
          }
        </div>
        <Link href="/">
          <a className={common.link}>&larr; Home</a>
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
