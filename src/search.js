import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchList from "./searchList";

const Search = () => {
  const [searchInputTerm, setSearchInputTerm] = useState("beach");
  const [wikipediaSearchTermResults, setWikipediaSearchTermResults] = useState(
    []
  );
  useEffect(() => {
    if (searchInputTerm && !wikipediaSearchTermResults.length) {
      fetchWikiData();
    } else {
      const timeoutId = setTimeout(() => {
        fetchWikiData();
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [searchInputTerm]);

  async function fetchWikiData() {
    const result = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: searchInputTerm,
      },
    });
    setWikipediaSearchTermResults(result.data.query.search);
  }
  return (
    <>
      <TextField
        variant="outlined"
        label="Enter a Search Term"
        size="medium"
        onChange={(e) => setSearchInputTerm(e.target.value)}
        value={searchInputTerm}
        sx={{ width: "82%" }}
        autoFocus
      />
      <SearchList searchDataResults={wikipediaSearchTermResults} />
    </>
  );
};
export default Search;
