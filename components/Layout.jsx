import Contact from './Contact'
import Footer from './Footer';
import Hero from './Hero'
import Meta from './Meta';

export default function Layout({ children, title }) {
  return (
    <>
      <Meta title={title} />

      <div className="md:grid md:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_3fr]">
        <aside className="md:self-start md:sticky md:top-0">
          <Hero></Hero>
          <div className="hidden md:block">
            <Contact></Contact>
            <Footer></Footer>
          </div>
        </aside>

        <main>
          { children }
        </main>

        <aside className="md:hidden">
          <Contact></Contact>
          <Footer></Footer>
        </aside>
      </div>
    </>
  );
}
