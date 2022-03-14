import React from "react";
import List from "./list";

const SearchList = ({ searchDataResults }) => {
  return (
    <div>
      {searchDataResults.map((item) => (
        <List key={item.pageid} item={item} />
      ))}
    </div>
  );
};

export default SearchList;
