import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PetProfileAvatar( {pet_id }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [avatar, setAvatar] = useState([]);
  const [defaultImage, setDefaultImage] = useState(null);

  useEffect(() => {
    getAvatar();
  }, []);

  async function getAvatar() {
    try {
      const res = await axios.get(`/api/pets/${pet_id}`);
      setAvatar(res.data.avatar);
    } catch (err) {
      console.log(err);
    }
  }

  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
    setDefaultImage(null);
  };

  // On file upload (click the upload button)
  const onFileUpload = async (id) => {
    id = pet_id;
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("imagefile", selectedFile, selectedFile.name);

    try {
      // Request made to the backend api
      // Send formData object
      const res = await axios.post(
        `/api/pets/profile/${id}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res);
      getAvatar();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row" style={{ paddingTop: "1vw" }}>
          <div className="col-3">
            <div
              style={{
                width: "35vw",
                height: "22vw",
              }}
            >
              {!avatar ? (
                <img
                  src={defaultImage}
                  style={{ width: "50%", height: "55%" }}
                  className="rounded-circle"
                />
              ) : (
                  <div style={{textAlign:"center"}}> 

                    <img
                      src={`/images/${avatar}`}
                      style={{ width: "45%", height: "50%" }}
                      className="rounded-circle"
                    />
                    {console.log(avatar)}
                  </div>
              )}
            </div>
          </div>
        </div>
        <div className="row" style={{ paddingTop: "1vw", textAlign:"center" }}>
          <div>
            <Button variant="contained">
              <label className="custom-file-upload">
                Select new photo here
                <input type="file" onChange={onFileChange} />
              </label>
            </Button>
            <Button onClick={onFileUpload} variant="contained">
              Upload
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
