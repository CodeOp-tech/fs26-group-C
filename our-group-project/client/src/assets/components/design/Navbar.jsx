import { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Box,
  Link,
  
} from "@mui/material";
import Dog from "@mui/icons-material/Pets";
// import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

export default function Navbar() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = useContext(AuthContext);

  return (
    <Box>
      <AppBar position="static" color="secondary" id="appbar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="logo"
          >
            <Link href="/">
              <Dog color="primary" />
            </Link>
          </IconButton>

          <Typography
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ fontSize: "2vw" }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              Website Name
            </Link>{" "}
          </Typography>
          {auth.user ? (
            <Stack
              direction="row"
              spacing={2}
              sx={{ flexWrap: "wrap", justifyContent: "flex-end" }}
            >
              <Button
                variant="contained"
                color="secondary"
                href="/"
                style={{ fontSize: "0.75rem" }}
              >
                Home{" "}
              </Button>

              <Button
                variant="contained"
                color="secondary"
                href="/user_profile"
                style={{ fontSize: "0.75rem" }}
              >
                {" "}
                Profile{" "}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                href="/about"
                style={{ fontSize: "0.75rem" }}
              >
                {" "}
                About Us{" "}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                href="/forum"
                style={{ fontSize: "0.75rem" }}
              >
                {" "}
                Forum{" "}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                href="/contact_us"
                style={{ fontSize: "0.75rem" }}
              >
                Contact Us{" "}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                href="/search_pets"
                style={{ fontSize: "0.75rem" }}
              >
                Find a Pet
              </Button>
              <Button
                variant="contained"
                onClick={auth.logout}
                style={{ fontSize: "0.75rem" }}
              >
                Logout
              </Button>
            </Stack>
          ) : (
            <Stack
              direction="row"
              spacing={2}
              sx={{ flexWrap: "wrap", justifyContent: "flex-end" }}
            >
              <Button
                variant="contained"
                color="secondary"
                href="/"
                style={{ fontSize: "0.75rem" }}
              >
                Home
              </Button>

              <Button
                variant="contained"
                color="secondary"
                href="/about"
                style={{ fontSize: "0.75rem" }}
              >
                About Us{" "}
              </Button>

              <Button
                variant="contained"
                color="secondary"
                href="/forum"
                style={{ fontSize: "0.75rem" }}
              >
                Forum{" "}
              </Button>

              <Button
                variant="contained"
                href="/login"
                style={{ fontSize: "0.75rem", color: "black" }}
              >
                Login
              </Button>

              <Button
                variant="contained"
                href="/registration"
                style={{ fontSize: "0.75rem", color: "black" }}
              >
                Sign Up
              </Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
