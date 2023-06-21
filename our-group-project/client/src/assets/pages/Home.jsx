import { useContext, useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/design/Header";
import MainFeaturedPost from "../components/About_Us/MainFeaturedPost.jsx";
import FeaturedPost from "../components/About_Us/FeaturedPost.jsx";
import Main from "../components/About_Us/Main";
import Sidebar from "../components/About_Us/Sidebar";
import Footer from "../components/design/Footer.jsx";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Grid,
  Divider,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import AuthContext from "../contexts/AuthContext";

function Home() {
  const auth = useContext(AuthContext);

  const mainFeaturedPost = {
    title: "Home",
    description:
      "Hi there! We believe that dogs deserve the perfect home. We also believe that the way to do this is through education and encouragement. We want to ensure you find your perfect pooch. Let us help!",
    image: "/public/cover_3.jpg",
    imageText: "main image description",
    linkText: auth.user ? "See the Forum " : "SignUp",
    linkUrl: auth.user ? "/forum" : "/registration",
  };

  const featuredPost = {
    title: "Wanna Find The Best Paw Friend For you?",
    date: "2022-02-02",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac arcu mollis, tincidunt erat et, scelerisque leo. Nam commodo felis dolor, eget volutpat ante eleifend aliquet. Sed in viverra odio.",
    text: "hello",
    image: "/public/dog_2.jpg",
    imageLabel: "Image Text",
    linkText: auth.user ? "Find A Paw Friend" : "SignUp",
    linkUrl: auth.user ? "/forum" : "/registration",
  };

  const about = {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac arcu mollis, tincidunt erat et, scelerisque leo. Nam commodo felis dolor, eget volutpat ante eleifend aliquet. ",
    image: "/public/cover_2.jpg",
    imageText: "main image description",
    linkText: "Join Now",
  };

  const qize = {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac arcu mollis, tincidunt erat et, scelerisque leo. Nam commodo felis dolor, eget volutpat ante eleifend aliquet. ",
    image: "/public/cover_2.jpg",
    imageText: "main image description",
    linkText: "Join Now",
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />

          <Grid>
            <FeaturedPost key={featuredPost.title} post={featuredPost} />
          </Grid>

          <Grid container={true} spacing={5} sx={{ mt: 3 }}>
            <Grid item xs={12}>
              <Typography variant="h2" component="h2">
                About Us
              </Typography>
              <Typography textAlign="justify" variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lobortis nibh ac risus venenatis, sed tincidunt est posuere.
                Nulla facilisi. Morbi vestibulum lorem in elit sagittis
                vestibulum. Fusce id dolor et turpis semper tristique. Mauris
                non mauris vitae erat consequat auctor. Mauris malesuada commodo
                nulla, sit amet rutrum lorem dictum vitae.
              </Typography>
            </Grid>
            <Container></Container>
          </Grid>
        </main>
      </Container>
    </>
  );
}

export default Home;
