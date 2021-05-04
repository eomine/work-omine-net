import Contact from './contact'
import Footer from './footer';
import Hero from './hero'
import Meta from './meta';
import styles from '../styles/layout.module.css';

export default function Layout({ children, title }) {
  return (
    <>
      <Meta title={title} />

      <div className={styles.wrapper}>
        <aside className={styles.aside}>
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
