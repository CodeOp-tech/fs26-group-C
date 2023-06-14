import { useState } from "react";
import { Box } from "@mui/material";
import { SignalCellularNullOutlined } from "@material-ui/icons";


export default function ImageUpload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    let file = e.target.files;
    //setFile((state) => [...state, URL.createObjectURL(file[0])]);
      setFile(URL.createObjectURL(file[0]))
  };

  return (
    <div>
      <label> Upload Image </label>
          <input type="file" onChange={handleChange} />
          <Box component="div" sx={{border:"1"}} >
              <img src={file} style={{ width:"25%", margin:"3%", padding:"0.5vw", border:"0.3vw", borderColor: "secondary.main"}} />
          </Box>

      {/* {file.map((e, i) => <img src={ e} key={i} style={{ width:"25%", margin:"3%", padding:"0.5vw", border:"0.3vw solid lightgray"}} /> )}   */}
      
    </div>
  );
}
