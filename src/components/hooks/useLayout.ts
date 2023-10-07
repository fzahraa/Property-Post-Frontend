import React from "react";
import { layoutServiceContext } from "../Context/applyoutContext";

export const useLayout = () => {
  /* We can use the "useContext" Hook to acccess a context from within
       another Hook, remember, Hooks are composable! */
  const content = React.useContext(layoutServiceContext);
  return content;
};
