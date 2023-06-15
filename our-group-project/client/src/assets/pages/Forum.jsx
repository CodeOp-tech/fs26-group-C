import { useContext, useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/About_Us/Header";
import MainFeaturedPost from "../components/About_Us/MainFeaturedPost.jsx";
import FeaturedPost from "../components/About_Us/FeaturedPost.jsx";
import Main from "../components/About_Us/Main";
import Sidebar from "../components/About_Us/Sidebar";
import Footer from "../components/About_Us/Footer.jsx";
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



function Forum() {
  const auth = useContext(AuthContext);



  const mainFeaturedPost = {
    title: "Forum",
    description:
      "Hi there! We believe that dogs deserve the perfect home. We also believe that the way to do this is through education and encouragement. We want to ensure you find your perfect pooch. Let us help!",
    image: "/public/cover_3.jpg",
    imageText: "main image description",
    linkText: (auth.user ?  "Take The Quiz" : "SignUp"),
    linkUrl:(auth.user ?"/quiz" :"/forum")
  };

  const featuredPost = 
    {
      title: "Wanna Find The Best Paw Friend For you?",
      date: "2022-02-02",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac arcu mollis, tincidunt erat et, scelerisque leo. Nam commodo felis dolor, eget volutpat ante eleifend aliquet. Sed in viverra odio.",
      image: "/public/dog_2.jpg",
      imageLabel: "Image Text",
      linkText: (auth.user ?  "Take The Quiz" : "SignUp"),
      linkUrl:(auth.user ?"/quiz" :"/registration")
    }
  

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          
            <Grid> 
              <FeaturedPost 
              key={featuredPost.title} 
              post={featuredPost} />
  
            </Grid>
        </main>
      </Container>
    </>
  );
}

export default Forum;
