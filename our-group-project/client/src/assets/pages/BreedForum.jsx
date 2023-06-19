import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Box, Typography, Stack, Grid, Button } from '@mui/material';

export default function BreedForum() {
  const { breed_id } = useParams();
  const [ breed, setBreed ] = useState({});

  useEffect(() => {
  loadBreed();
  }, [breed_id])

  async function loadBreed() {
    try {
      const response = await fetch(`api/breeds/${breed_id}`);
      const data = await response.json();
      setBreed(data);
      
    } catch(err) {

    }
  }

  return (
    <div>
    <div>{breed.breed}</div>
    <div>
<img src={breed.image_url} />
    </div>
    </div>
  )
}
