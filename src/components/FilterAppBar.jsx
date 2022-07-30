import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function FilterAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          <h2>Filter</h2>
          <Link style={{ textDecoration: "none" }} to="/home">
            <h2>x</h2>
          </Link>
        </div>
      </AppBar>
    </Box>
  );
}
