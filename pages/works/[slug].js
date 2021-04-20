import Layout from '../../components/layout';
import { getPostBySlug, getPostsSlugs } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Work({ title, content }) {
  return (
    <Layout title={title}>
      <h1>
        { title }
      </h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
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
