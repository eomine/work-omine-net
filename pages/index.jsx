import Layout from '../components/Layout';
import RecentWorks from '../components/home/RecentWorks'
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
