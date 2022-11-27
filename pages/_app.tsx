import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="min-h-[100vh]">
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MyApp;
