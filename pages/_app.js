// import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import Cursor from "../components/Cursor";
import CursorContextProvider from "../components/CursorContextProvider";
import "../styles/globals.css";
import "@fontsource/sarina";

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
