import react, { useState } from "react";
import UploadImage from "./upload.svg";

const UploadIcon = ({func}) => {


  return (
    <img
      style={{ width:"30px",margin:"unset",marginRight:"10px" }}
      src={UploadImage}
      onClick={func}
      alt="upload"
    />
  );
};
export default UploadIcon;
