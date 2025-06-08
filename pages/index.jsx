import Meta from '../components/Meta'
import RecentWorks from '../components/home/RecentWorks'
import { getAllPosts } from '../lib/api';

export default function Home({ recentWorks }) {
  return (
    <>
      <Meta />
      <RecentWorks data={recentWorks}></RecentWorks>
    </>
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
