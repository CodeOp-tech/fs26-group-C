import { useContext, useEffect } from "react";
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
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function PetCard({
  id,
  name,
  bio,
  age,
  breed,
  location,
  breed_id,
  user_id,
}) {
  const auth = useContext(AuthContext);

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image="https://picsum.photos/seed/picsum/200/300"
        alt="placeholder image"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>

        <Divider variant="middle" />

        <Typography variant="h6" color="text.secondary">
          {breed}
        </Typography>

        <Grid>
          <Box sx={{ mt: "1px" }}>
            <Typography>{location}</Typography>
            <Typography variant="body2" color="text.secondary">
              {age} years
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {bio}
            </Typography>
          </Box>
        </Grid>
      </CardContent>
      <CardActions>
        <Box sx={{ mb: "4px" }}>
          <Link to={`/${breed_id}`}>
            <Button size="small" color="secondary">
              Breed Info
            </Button>
          </Link>
          {user_id == auth.userId && <Button>Delete</Button>}
        </Box>
      </CardActions>
    </Card>
  );
}
