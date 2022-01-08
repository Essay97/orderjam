import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import AuthContext from "../context/authContext";
import { useContext } from "react";

export default function Header() {
  const { user, login } = useContext(AuthContext);

  return (
    <AppBar position="static" sx={{ marginBottom: "60px" }}>
      <Toolbar>
        <Typography variant="h4" flexGrow={1}>
          OrderJam
        </Typography>
        <Button color="inherit" onClick={login}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
