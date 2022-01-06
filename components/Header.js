import React from "react";
import { AppBar, Toolbar } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" sx={{ marginBottom: "60px" }}>
      <Toolbar>
        <h1>OrderJam</h1>
      </Toolbar>
    </AppBar>
  );
}
