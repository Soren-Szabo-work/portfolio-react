import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import useMedia from "./useMedia";

function useDarkTheme() {
  //use our iseLocalStorage to persist state through a page refresh
  const [enabledState, setEnabledState] = useLocalStorage("dark-theme-enabled");
  //if user has set a browser or OS preference for dark theme
  const prefersDarkTheme = usePrefersdarkTheme();

  //this allows user to override OS level setting on our website
  const enabled =
    typeof enabledState !== "undefined" ? enabledState : prefersDarkTheme;

  //effect that add/ removes dark theme class
  useEffect(
    () => {
      const className = "dark-theme";
      const element = window.document.body;

      if (enabled) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [enabled] //only re-call effect when value changes
  );

  return [enabled, setEnabledState];
}

function usePrefersdarkTheme() {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false);
}

export default useDarkTheme;
