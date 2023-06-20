import { ImageList, ImageListItem, Button } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';

export default function Gallery() {
  const auth = useContext(AuthContext);
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    getUserImages();
    getPetImages();
  }, [images]);

  async function getUserImages() {
    try {
      const res = await axios.get(`api/photos/user/${auth.userId}`);
      setImages(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getPetImages() {
    try {
      const res = await axios.get(`api/pets/user/${auth.userId}`);
      setImages(res.data);
    } catch (error) {
      console.log(error);
    }
  }


  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = async (id) => {
    id = auth.userId;
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("imagefile", selectedFile, selectedFile.name);

    try {
      // Request made to the backend api
      // Send formData object
      const res = await axios.post(`/api/photos/users/${id}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res);
      getImages();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <ImageList sx={{}} cols={4} rowHeight={164}>
        {!images ? (
          <div>
            <input type="file" onChange={onFileChange} />
            <Button onClick={onFileUpload} endIcon={<AddIcon/>}> Add Photo</Button>
          </div>
        ) : (
          <div style={{}}>
            {images.map((photo) => (
              <div key={photo.id}>
                <ImageListItem>
                  <img
                    src={`${photo.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${photo.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  />
                </ImageListItem>
                <Button>Delete image</Button>
              </div>
            ))}
            <div>
                <Button color="secondary" endIcon={<AddIcon />}>
                  <label className="custom-file-upload">
                  Add Photo
                  <input type="file" onChange={onFileChange} />
                </label>
              </Button>
              <Button variant="outlined" color="secondary" onClick={onFileUpload}>
                Save Changes
              </Button>
            </div>
          </div>
        )}
      </ImageList>
    </div>
  );
}
