import Layout from '../components/layout';
import RecentWorks from '../components/home/recent-works'
import { getAllPosts } from '../lib/api';

export default function Home({ recentWorks }) {
  return (
    <Layout>
      <RecentWorks data={recentWorks}></RecentWorks>
    </Layout>
  )
}

export async function getStaticProps() {
  const recentWorks = getAllPosts('works');

  return {
    props: {
      recentWorks,
    },
  };
}
