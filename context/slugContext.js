import { createContext, useContext, useState } from "react";

export const SlugContext = createContext();

export function SlugProvider({ children }) {
  const [slugs, setSlugs] = useState([]);

  return <SlugContext.Provider value={{ slugs, setSlugs }}>{children}</SlugContext.Provider>;
}

export function useSlugs() {
  const context = useContext(SlugContext);

  if (!context) throw new Error("useSlugs must be used inside a `SlugProvider`");

  return context;
}
