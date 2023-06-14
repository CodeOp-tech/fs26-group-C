import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
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
import Typography from "@mui/material/Typography";
import post1FilePath from "../components/About_Us/blog-post.1.md";
// import post2FilePath from '../components/About_Us/blog-post.2.md';
// import post3FilePath from '../components/About_Us/blog-post.3.md';

function About() {
  const [post1, setPost1] = useState("");
  // const [post2, setPost2] = useState('');
  // const [post3, setPost3] = useState('');

  useEffect(() => {
    const fetchMarkdownFiles = async () => {
      try {
        const [post1Response, post2Response, post3Response] = await Promise.all(
          [
            fetch(post1FilePath),
            // fetch(post2FilePath),
            // fetch(post3FilePath)
          ]
        );

        const [post1Text, post2Text, post3Text] = await Promise.all([
          post1Response.text(),
          // post2Response.text(),
          // post3Response.text()
        ]);

        setPost1(post1Text);
        // setPost2(post2Text);
        // setPost3(post3Text);
      } catch (error) {
        console.error("Error loading Markdown files:", error);
      }
    };

    fetchMarkdownFiles();
  }, []);

  const mainFeaturedPost = {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac arcu mollis, tincidunt erat et, scelerisque leo. Nam commodo felis dolor, eget volutpat ante eleifend aliquet. ",
    image: "/public/cover_2.jpg",
    imageText: "main image description",
    linkText: "Continue reading…",
  };

  const featuredPosts = [
    {
      title: "Re-Homing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac arcu mollis, tincidunt erat et, scelerisque leo. Nam commodo felis dolor, eget volutpat ante eleifend aliquet. Sed in viverra odio.",
      image: "/public/dog_2.jpg",
      imageLabel: "Image Text",
    },
    {
      title: "Adoption",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac arcu mollis, tincidunt erat et, scelerisque leo. Nam commodo felis dolor, eget volutpat ante eleifend aliquet. Sed in viverra odio.",
      image: "/public/dog_2.jpg",
      imageLabel: "Image Text",
    },
  ];

  const about = {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac arcu mollis, tincidunt erat et, scelerisque leo. Nam commodo felis dolor, eget volutpat ante eleifend aliquet. ",
    image: "/public/cover_2.jpg",
    imageText: "main image description",
    linkText: "Continue reading…",
  };

  const sidebar = {
    title: "",
    description:
      "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
    archives: [],
    social: [
      { name: "GitHub", icon: GitHubIcon },
      { name: "Twitter", icon: TwitterIcon },
      { name: "Facebook", icon: FacebookIcon },
    ],
  };

  const posts = [post1];

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container container justifyContent="center" maxWidth>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>

          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Grid item xs={12} md={8}>
              <Typography justifyContent="center" variant="h2" component="h2">
                About Us
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lobortis nibh ac risus venenatis, sed tincidunt est posuere.
                Nulla facilisi. Morbi vestibulum lorem in elit sagittis
                vestibulum. Fusce id dolor et turpis semper tristique. Mauris
                non mauris vitae erat consequat auctor. Mauris malesuada commodo
                nulla, sit amet rutrum lorem dictum vitae.
              </Typography>
            </Grid>

            <Grid item xs={12} md={8}>
              <Main title="Forum" posts={posts} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid>
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default About;
