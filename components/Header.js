import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import AuthContext from "../context/authContext";

export default function Header() {
  const { user, login, logout, authReady } = useContext(AuthContext);

  console.log(user);

  return (
    <AppBar position="static" sx={{ marginBottom: "60px" }}>
      <Toolbar>
        <Typography variant="h4" flexGrow={1}>
          OrderJam
        </Typography>
        {authReady && (
          <Button
            variant="contained"
            color="secondary"
            onClick={user ? logout : login}
          >
            {user ? "Logout" : "Login"}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
