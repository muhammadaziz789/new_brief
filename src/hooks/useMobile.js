import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
export const useIsMobile = (status) => {
  const minDesktop = useSelector((state) => state.windowSize.minDesktop);
  const tablet = useSelector((state) => state.windowSize.tablet);
  const ipod = useSelector((state) => state.windowSize.ipod);
  const mobile = useSelector((state) => state.windowSize.mobile);
  const small = useSelector((state) => state.windowSize.small);

  const defaultWidth = useMemo(() => {
    switch (status) {
      case "minDesktop":
        return minDesktop;
      case "tablet":
        return tablet;
      case "ipod":
        return ipod;
      case "mobile":
        return mobile;
      default:
        return small;
    }
  }, [mobile, minDesktop, status, ipod]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window) {
      setIsMobile(window.innerWidth < defaultWidth);
      window.addEventListener("resize", () => {
        setIsMobile(window.innerWidth < defaultWidth);
      });
    }
  }, [defaultWidth]);
  return isMobile;
};
