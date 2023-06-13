import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import Dog from "@mui/icons-material/Pets";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div>
      <AppBar position="static" color="secondary" id="appbar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
           color="secondary"
            aria-label="logo"
          >
            <Link to="/">
              <Dog 
              color="primary"/>
            </Link>
          </IconButton>
          <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }} style={{ fontSize: "2rem" }}>
            Website Name
          </Typography>
          {isLoggedIn ? (
            <Stack direction="row" spacing={2}  sx={{flexWrap:"wrap", justifyContent:"flex-end" }}>
              <Button  color="inherit" style={{ fontSize: "0.75rem"}}>
                <Link to="/">Home </Link>
              </Button>
              <Button color="inherit" style={{ fontSize: "0.75rem" }}>
                <Link to="/user_profile">Profile </Link>
              </Button>
              <Button color="inherit" style={{ fontSize: "0.75rem" }}>
                <Link to="/about">About us </Link>
              </Button>
              <Button color="inherit" style={{ fontSize: "0.75rem" }}>
                <Link to="/forum">Forum </Link>
              </Button>
              <Button color="inherit" style={{ fontSize: "0.75rem" }}>
                <Link to="/contact_us">Contact us </Link>
              </Button>
              <Button color="inherit" style={{ fontSize: "0.75rem" }}>
                <Link to="/search_pets">Find a Pet</Link>
              </Button>
              <Button
              variant="contained">
                <Link to="/login" style={{ fontSize: "0.75rem" }}>
                  Logout
                </Link>
              </Button>
            </Stack>
          ) : (
            <Stack direction="row" spacing={2} sx={{flexWrap:"wrap", justifyContent:"flex-end" }}>
              <Button color="inherit" style={{ fontSize: "0.75rem" }}>
                <Link to="/">Home </Link>
              </Button>
              <Button color="inherit" style={{ fontSize: "0.75rem" }}>
                <Link to="/about">About us </Link>
              </Button>
              <Button color="inherit" style={{ fontSize: "0.75rem" }}>
                <Link to="/forum">Forum </Link>
              </Button>
              <Button color="inherit" style={{ fontSize: "0.75rem" }}>
                <Link to="/contact_us">Contact us </Link>
              </Button>
              <Button
              variant="contained">
                <Link to="/login" style={{ fontSize: "0.75rem" }}>
                  Login
                </Link>
                </Button>
              <Button
              variant="contained">
                <Link to="/register" style={{ fontSize: "0.75rem" }}>
                  Sign Up
                </Link>
              </Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
