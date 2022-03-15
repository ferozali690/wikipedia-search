import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import React from "react";
const useStyles = makeStyles({
  root: {
    border: "1px solid ",
    width: "80%",
  },
});
const List = ({ item }) => {
  const { title, snippet, pageid } = item;
  const classes = useStyles();

  return (
    <Box className={classes.root} mb={2} px={2}>
      <h2>{title}</h2>
      <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
      <Box
        display="flex"
        justifyContent="flex-end"
        height={50}
        alignItems="flex-start"
      >
        <Button
          variant="contained"
          href={`https://en.wikipedia.org?curid=${pageid}`}
        >
          Visit Link
        </Button>
      </Box>
    </Box>
  );
};

export default List;
