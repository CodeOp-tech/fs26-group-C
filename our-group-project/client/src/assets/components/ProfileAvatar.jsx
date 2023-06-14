import { useState } from "react";

export default function ProfileAvatar() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    let file = e.target.files;
    //setFile((state) => [...state, URL.createObjectURL(file[0])]);
    setImage(URL.createObjectURL(file[0]));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div
              style={{
                border: "0.2vw solid lightgray",
                width: "20vw",
                              height: "20vw",
                              textAlign: "center",
                backgroundColor:"darkgrey"
              }}
            >
              <img src={image} style={{width:"75%"}} />
            </div>
          </div>
          <div className="col-4">
            <div>
              <input type="file" onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
