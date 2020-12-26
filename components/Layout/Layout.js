import { Navbar } from "@/components/shared/Navbar";
import Head from "next/head";
import { Hero } from "@/components/shared/Hero";

export const Layout = ({ page, showHero, showFooter, children }) => (
  <>
    <Head>
      <title>{page} | .arthurseredaa</title>
    </Head>
    <Navbar />
    {showHero && <Hero />}
    <div className="container">{children}</div>
    {showFooter && (
      <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
        <div className="container text-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer>
    )}
  </>
);
