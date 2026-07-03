import React from "react";
import { useLocation } from "react-router-dom";

export const RouterInit = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
