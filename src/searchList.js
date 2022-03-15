import { Box } from "@mui/material";
import React from "react";
import List from "./list";

const SearchList = ({ searchDataResults }) => {
  return (
    <Box mt={4}>
      {searchDataResults.map((item) => (
        <List key={item.pageid} item={item} pageid={item.pageid} />
      ))}
    </Box>
  );
};

export default SearchList;
