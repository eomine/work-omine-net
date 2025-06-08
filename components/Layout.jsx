import { Fira_Sans } from "next/font/google";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Layout({ children }) {
  return (
    <div
      className={`md:grid md:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_3fr] ${firaSans.className}}`}
    >
      <aside className="md:self-start md:sticky md:top-0">
        <Hero></Hero>
        <div className="hidden md:block">
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </aside>

      <main>{children}</main>

      <aside className="md:hidden">
        <Contact></Contact>
        <Footer></Footer>
      </aside>
    </div>
  );
}
