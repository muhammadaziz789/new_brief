import { useState, useEffect } from "react";

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(undefined);
  useEffect(() => {
    function handleResize() {
      setWindowWidth({width: window.innerWidth, height: window.innerHeight});
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}
