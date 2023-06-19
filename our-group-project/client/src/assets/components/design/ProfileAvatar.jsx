import { useState } from "react";
import { Button } from "@mui/material";

export default function ProfileAvatar() {
  const [image, setImage] = useState(null);
  const [defaultImage, setDefaultImage] = useState(
    "data:image/jpeg;base64,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IlJFRBZV8SeJPMmbEqaREQEREBERAREQEREBERAREQPLE4ZKilHUOp3gj+rHrlS0rqiwu1Btoe4x6X2W3Hvt2mXKIVyWtSZGKupRhvDAg+cxnU8dgKdZdmogccDxHYRmJT9Laqul3pE1E37P8QeHr92fVBquREQpERARNjDGl/EFXtRk+jL+c3qdTBDfTxL/ADOg/ltAiZsYXR1St6lNn6wOj945Dxlu1dGGqltjDKgS3Sc7Zub2A2r8AeMswEJqpaM1P3NXa/wIcvtN+njLVRoqihUUKo3ACwEziAiIhCIiAiIgIiICIiAiIgIiICIiAiIgIiIEFp/V9awLoAlXwD9TdfxePVQqlMqSrAqwNiDvBG8GdalV1z0UCvp0HSWwe3FdwbtGQ7OyCKbERDRMqNJnYIgLMxsoG8kxSps7BVUszGwA3ky/6vaCGHG29mqMMzwUe6v5mEbmhdHDD0ggzb1nPNjv7twHUJvxEIREQEREBERAREQEREBERAREQEREBERAREQEREBMa1MOrIwurAqR1EWMyiByfE0Cjuh3oxU/ZNrzY0bo2pXbZRbgesxyVe0/lvlvxWrK1cQ9V36DbJ2FyJIUA3PAXHDPPeJO4egiKERQijcALCF1o6G0KmGXo9JyOk5GZ6h7q9XjeSURAREQhERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/Z"
  );

  const handleChange = (e) => {
    let file = e.target.files;
    //setFile((state) => [...state, URL.createObjectURL(file[0])]);
    setDefaultImage(null);
    setImage(URL.createObjectURL(file[0]));
  };

  const handleSelect = () => {
    //this needs to be posted to backend
    //another option needs to be added so that it's deleted from backend when photo is changed.
    setDefaultImage(image);
  };

  return (
    <div>
      <div className="container">
        <div className="row" style={{ paddingTop: "1vw" }}>
          <div className="col-6">
            <div
              style={{
                width: "30vw",
                height: "20vw",
              }}
            >
              {defaultImage ? (
                <img
                  src={defaultImage}
                  style={{ width: "60%", height: "95%" }}
                  className="rounded-circle"
                />
              ) : (
                <img
                  src={image}
                  style={{ width: "60%", height: "95%" }}
                  className="rounded-circle"
                />
              )}
            </div>
          </div>
          
        </div>
        <div className="row" style={{ paddingTop: "1vw" }}>
          <div>
            <Button variant="contained">
              <label className="custom-file-upload">
                Upload new photo here
                <input type="file" onChange={handleChange} />
              </label>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
