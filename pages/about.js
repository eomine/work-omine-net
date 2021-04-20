import Layout from "../components/layout";
import { getPostBySlug } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';

export default function About({ title, content }) {
  return (
    <Layout title={title}>
      <h1>
        { title }
      </h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
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
