import Content from '../components/Content';
import H1 from '../components/H1';
import Link from '../components/Link';
import Main from "../components/Main";
import Meta from "../components/Meta";
import { getPostBySlug } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';

export default function About({ title, content }) {
  return (
    <>
      <Meta title={title} />
      <Main>
        <Link href="/">
          &larr; Home
        </Link>
        <div className="h-8"></div>
        <H1>
          { title }
        </H1>
        <Content content={content}></Content>
        <Link href="/">
          &larr; Home
        </Link>
      </Main>
    </>
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
