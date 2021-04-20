import Footer from './footer';
import Meta from './meta';

export default function Layout({ children, title }) {
  return (
    <>
      <Meta title={title} />

      <main>
        { children }
      </main>

      <Footer></Footer>
    </>
  );
}
