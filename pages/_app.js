// import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import CursorContextProvider from "../components/CursorContextProvider";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

// Fonts
import "@fontsource/sarina";
import localFont from "@next/font/local";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const clashDisplay = localFont({
  src: "../webfonts/ClashDisplay-Variable.woff2",
});

function App({ Component, pageProps, router }) {
  // is true while router is fetching the next page, useful for animations
  const [pageLoading, setPageLoading] = useState(false);
  const [isFirstUse, setIsFirstUse] = useState(true);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
      isFirstUse && setIsFirstUse(false);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [isFirstUse, router]);

  return (
    //https://www.npmjs.com/package/next-themes
    <ThemeProvider>
      <CursorContextProvider>
        <Cursor />
        <main className={clashDisplay.className}>
          <Header></Header>
          <AnimatePresence>
            <Component
              key={router.route}
              isFirstUse={isFirstUse}
              {...pageProps}
            />
          </AnimatePresence>
          <Footer></Footer>
        </main>
      </CursorContextProvider>
    </ThemeProvider>
  );
}

export default App;
