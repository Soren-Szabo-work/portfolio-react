import { useRouter } from "next/router";
import { useContext, useCallback, useEffect } from "react";
import { CursorContext } from "../components/CursorContextProvider";
import useDeviceDetext from "./useDeviceDetect";

const useCursorHandlers = (options = {}) => {
  const [, setCursor] = useContext(CursorContext);
  const { isMobile } = useDeviceDetext();
  const router = useRouter();

  const toggleCursor = useCallback(() => {
    setCursor(({ hover }) => ({ hover: !hover }));
  }, [setCursor]);

  const setCursorHover = useCallback(
    (value) => {
      setCursor(() => ({ hover: value }));
    },
    [setCursor]
  );

  // reset cursor hover on route change/new page
  // https://stackoverflow.com/a/67678422
  useEffect(() => {
    const handleRouteChange = () => setCursor(() => ({ hover: false }));

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, setCursor]);

  const onMouseEnter = useCallback(
    (event) => {
      if (options.onMouseEnter) {
        options.onMouseEnter(event);
      }
      setCursorHover(true);
    },
    [options, setCursorHover]
  );

  const onMouseLeave = useCallback(
    (event) => {
      if (options.onMouseLeave) {
        options.onMouseLeave(event);
      }
      setCursorHover(false);
    },
    [options, setCursorHover]
  );

  if (isMobile) return options;
  return { onMouseEnter, onMouseLeave };
};

export default useCursorHandlers;
