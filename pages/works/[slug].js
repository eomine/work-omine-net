import Link from 'next/link';
import Layout from '../../components/layout';
import { getPostBySlug, getPostsSlugs } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Work({ title, content }) {
  return (
    <Layout title={title}>
      <section className="p-40 dark:bg-gray-900">
        <div className="max-w-4xl">
          <h1 className="mb-8 text-5xl text-gray-400">
            { title }
          </h1>
          <div className="mb-12 text-3xl text-gray-100" dangerouslySetInnerHTML={{ __html: content }}></div>
          <Link href="/">
            <a className="text-gray-300 text-xl tracking-widest uppercase">Back to home</a>
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
