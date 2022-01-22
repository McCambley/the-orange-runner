import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  function search(keyword) {
    setSearchResults([]);
    setLoading(true);
    setError(false);
    return fetch(`api/search?keyword=${keyword}`)
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`${res.status} error!`);
        }
        return res.json();
      })
      .then((data) => {
        setSearchResults(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.error(error);
      });
  }

  return (
    <SearchContext.Provider value={{ keyword, setKeyword, loading, error, searchResults, search }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) throw new Error("useSlugs must be used inside a `SearchProvider`");

  return context;
}
