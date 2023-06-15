import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import MainFeaturedPost from "../components/About_Us/MainFeaturedPost.jsx";
import AddPet from "../components/AddPet";

function Forum() {

  const mainFeaturedPost = {
    title: "Join the Community Talk!!",
    image: "/public/puppy-cover.jpg",
    imageText: "puppies"
  };

  return (
    <>
      <CssBaseline />

      <Container maxWidth="xl">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
        </main>
      </Container>
      <div>
        <AddPet />
      </div>
    </>
  );
}

export default Forum;
