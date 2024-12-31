import { useState, useEffect } from "react";
import InputField from "../../../components/common/Input/InputField.tsx";
import useDebounce from "../../../hooks/useDebounce.tsx";
const Search = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  useEffect(() => {
    if (debouncedQuery) {
      console.log("Debounced Query:", debouncedQuery);
    }
  }, [debouncedQuery]);
  return (
    <>
      <InputField
        id="header-search"
        className="header-nav-input-search"
        placeholder="What do you want to play ?"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
};

export default Search;
