import {  useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Box,
  Link
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
            variant="subtitle2"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ fontSize: "2.6vw" }}
          >
            Website Name
          </Typography>
          {auth.user ? (
            <Stack
              direction="row"
              spacing={2}
              sx={{ flexWrap: "wrap", justifyContent: "flex-end" }}
            >
              {/* <Button color="inherit" style={{ fontSize: "0.75rem" }}> */}
                <Link href="/">Home </Link>
              {/* </Button> */}
              {/* <Button color="inherit" style={{ fontSize: "0.75rem" }}> */}
                <Link href="/user_profile">Profile </Link>
              {/* </Button> */}
              {/* <Button color="inherit" style={{ fontSize: "0.75rem" }}> */}
                <Link href="/about">About us </Link>
              {/* </Button> */}
              {/* <Button color="inherit" style={{ fontSize: "0.75rem" }}> */}
                <Link href="/forum">Forum </Link>
              {/* </Button> */}
              {/* <Button color="inherit" style={{ fontSize: "0.75rem" }}> */}
                <Link href="/contact_us">Contact us </Link>
              {/* </Button> */}
              {/* <Button color="inherit" style={{ fontSize: "0.75rem" }}> */}
                <Link href="/search_pets">Find a Pet</Link>
              {/* </Button> */}
              <Button variant="contained" onClick={auth.logout}>
                <Link href="/login" style={{ fontSize: "0.75rem" , color:"black"}}>
                  Logout
                </Link>
              </Button>
            </Stack>
          ) : (
            <Stack
              direction="row"
              spacing={2}
              sx={{ flexWrap: "wrap", justifyContent: "flex-end" }}
            >
              {/* <Button color="inherit" style={{ fontSize: "0.75rem" }}> */}
                <Link  href="/">HOME</Link>
              {/* </Button> */}
              {/* <Button color="inherit" style={{ fontSize: "0.75rem" }}> */}
                <Link  href="/about">ABOUT US </Link>
              {/* </Button> */}
              {/* <Button color="inherit" style={{ fontSize: "0.75rem" }}> */}
                <Link  href="/forum">FORUM </Link>
              {/* </Button> */}
              {/* <Button color="inherit" style={{ fontSize: "0.75rem" }}> */}
                <Link  href="/contact_us"> CONTACT US </Link>
              {/* </Button> */}
              <Button variant="contained">
                <Link  href="/login" style={{ fontSize: "0.75rem", color:"black" }}>
                  Login
                </Link>
              </Button>
              <Button variant="contained">
                <Link   href="/registration" style={{ fontSize: "0.75rem", color:"black" }}>
                  Sign Up
                </Link>
              </Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

