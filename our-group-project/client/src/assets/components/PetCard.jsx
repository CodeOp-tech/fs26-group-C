import React from 'react'
import { Card, CardMedia, Typography, CardContent, Grid, Divider, CardActions, Button, Box} from  "@mui/material";
import  { Link } from 'react-router-dom';


export default function PetCard({name, bio, age, breed, location, breed_id }) {
  return (
    <Card>
      <CardMedia
      component="img"
      height="200"
      image="https://picsum.photos/seed/picsum/200/300"
      alt="placeholder image"
      />
      <CardContent>
        
          
          <Typography
        variant='h5'
        component="div">
        {name}
        </Typography>
          
        <Divider variant="middle"/>

        <Typography variant="h6" color="text.secondary">
        {breed}
        </Typography>
        
        <Grid>
          <Box sx={{ mt: '1px'}}>
          <Typography>
            {location}
          </Typography>
        <Typography variant='body2' color="text.secondary">
        {age} years
        </Typography>

       
        <Typography variant="body2" color="text.secondary">
        {bio}
        </Typography>
        </Box>
        </Grid>
        
      </CardContent>
      <CardActions>
        <Box sx={{ mb: '4px'}}>
        <Link to={`/${breed_id}`}>
        <Button size="small" color="secondary">Learn More
        </Button>
        </Link>
        </Box>

      </CardActions>
    </Card>
  )
}
