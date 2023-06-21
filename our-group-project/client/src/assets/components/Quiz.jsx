import { useContext, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./design/Header";
import MainFeaturedPost from "../components/About_Us/MainFeaturedPost.jsx";
import FeaturedPost from "../components/About_Us/FeaturedPost.jsx";
import { Grid, Box, Typography, Button, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel } from "@mui/material";
import AuthContext from "../contexts/AuthContext";

function Forum() {
  const auth = useContext(AuthContext);
  const [showQuizForm, setShowQuizForm] = useState(false);
  const [houseSize, setHouseSize] = useState("");
  const [childFriendliness, setChildFriendliness] = useState("");

  const handleHouseSizeChange = (event) => {
    setHouseSize(event.target.value);
  };

  const handleChildFriendlinessChange = (event) => {
    setChildFriendliness(event.target.value);
  };

  const handleStartQuiz = () => {
    setShowQuizForm(true);
  };

  const mainFeaturedPost = {
    title: "Quiz",
    description:
      "Hi there! We believe that dogs deserve the perfect home. We also believe that the way to do this is through education and encouragement. We want to ensure you find your perfect pooch. Let us help!",
    image: "/public/cover_3.jpg",
    imageText: "main image description",
    linkText: auth.user ? "Take The Quiz" : "SignUp",
    linkUrl: auth.user ? "/quiz" : "/#",
  };

  const featuredPost = {
    title: "Are You Ready?",
    date: "2022-02-02",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac arcu mollis, tincidunt erat et, scelerisque leo. Nam commodo felis dolor, eget volutpat ante eleifend aliquet. Sed in viverra odio.",
    image: "/public/dog_2.jpg",
    imageLabel: "Image Text",
    linkText: auth.user ?'' : "SignUp",
    linkUrl: auth.user ? "/quiz" : "/#",
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

          {!showQuizForm && (
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Button variant="contained" color="primary" onClick={handleStartQuiz}>
                {auth.user ? "Start The Quiz" : "SignUp"}
              </Button>
            </Box>
          )}

          {showQuizForm && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" gutterBottom>
                House Size:
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="house-size"
                  name="house-size"
                  value={houseSize}
                  onChange={handleHouseSizeChange}
                >
                  <FormControlLabel
                    value="small"
                    control={<Radio />}
                    label="Small (e.g., studio, one-bedroom)"
                  />
                  <FormControlLabel
                    value="large"
                    control={<Radio />}
                    label="Large (e.g., two-bedroom or more)"
                  />
                </RadioGroup>
              </FormControl>

              <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>
                Child Friendliness:
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="child-friendliness"
                  name="child-friendliness"
                  value={childFriendliness}
                  onChange={handleChildFriendlinessChange}
                >
                  <FormControlLabel
                    value="not-important"
                    control={<Radio />}
                    label="Not important, there are no children in the household"
                  />
                  <FormControlLabel
                    value="very-important"
                    control={<Radio />}
                    label="Very important, we have children or frequently have children visiting"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          )}
        </main>
      </Container>
    </>
  );
}

export default Forum;
