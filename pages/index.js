import Layout from '../components/layout';
import Contact from '../components/home/contact'
import Hero from '../components/home/hero'
import RecentWorks from '../components/home/recent-works'
import { getAllPosts } from '../lib/api';

export default function Home({ recentWorks }) {
  return (
    <Layout>
      <Hero></Hero>
      <RecentWorks data={recentWorks}></RecentWorks>
      <Contact></Contact>
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
