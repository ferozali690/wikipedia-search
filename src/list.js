import { Typography } from "@mui/material";
import React from "react";

const List = ({ item }) => {
  const { title, snippet } = item;
  return (
    <>
      <Typography>{title}</Typography>
      <Typography>{snippet}</Typography>
    </>
  );
};

export default List;
