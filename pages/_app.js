// import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import CursorContextProvider from "../components/CursorContextProvider";
import Cursor from "../components/Cursor";

// Fonts
import "@fontsource/sarina";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    //https://www.npmjs.com/package/next-themes
    <ThemeProvider>
      <CursorContextProvider>
        <Cursor />
        <Component {...pageProps} />
      </CursorContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
