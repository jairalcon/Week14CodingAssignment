import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const Stars = (props) => {
  return (
    <Box sx={{ "& > legend": { mt: 3 } }}>
      <h6>{props.username}</h6>
      <Rating name="read-only" value={parseInt(props.rating)} readOnly />
    </Box>
  );
};

export default Stars;