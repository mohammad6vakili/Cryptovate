import react, { useState } from "react";
import "./ApplyCreator.css";
import circleBg from "./Assets/circle-vector.svg";
import { Input, Button, Radio, Upload } from "antd";
import Poster from "../../assets/images/poster.jpeg";
import leftBg from "./Assets/left-blur.svg";
import rightBg from "./Assets/right-blur.svg";
import UploadIcon from "./Assets/Upload";
import { Option, Select } from "../../components/Select";
const { TextArea } = Input;

const ApplyCreator = ({ theme }) => {
  const [fileList, setFileList] = useState([]);
  const [uploadRef, setUploadRef] = useState(null);
  const [fileName, setFileName] = useState("");
  const [imageList, setImageList] = useState("");

  const getFile = async (e) => {
    const base64 = await converter(e.target.files[0]);
    setFileName(e.target.files[0].name);
    setImageList(base64);
    setFileList(base64.split(",")[1]);
  };

  const converter = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className={`mv-page ${theme === "dark" && "mv-page-dark"}`}>
      <img className="mv-creator-apply-form-bottom-bg" src={leftBg} alt="bg" />
      <div
        className={`mv-page-search ${
          theme === "light" ? "mv-page-search-light" : ""
        }`}
      >
        <Input onFocus={() => console.log(fileList)} placeholder="Search" />
      </div>
      <div className="mv-page-title text-colorfull-green">Apply Below</div>
      <div className="mv-signup-video-wrapper">
        <img src={circleBg} alt="bg" />
        <img src={leftBg} alt="bg" />
        <img src={rightBg} alt="bg" />
        <video
          controls
          className="avatar-project-video"
          src={"https://www.w3schools.com/html/mov_bbb.mp4"}
          poster={Poster}
        ></video>
      </div>
      <div
        className={`mv-creator-apply-form ${
          theme === "light" ? "mv-creator-apply-form-light" : ""
        }`}
      >
        {/* ----------------------profile name------------------------ */}
        <div
          className={`mv-creator-apply-form-field ${
            theme === "light" ? "mv-creator-apply-form-field-light" : ""
          }`}
        >
          <div>Profile Name:</div>
          <Input />
          <span>*This will be permanent*</span>
        </div>
        {/* ----------------------profile name------------------------ */}
        <div
          className={`mv-creator-apply-form-field ${
            theme === "light" ? "mv-creator-apply-form-field-light" : ""
          }`}
        >
          <div>Instagram Link:</div>
          <Input />
        </div>
        {/* ----------------------Portfolio Link------------------------ */}
        <div
          className={`mv-creator-apply-form-field ${
            theme === "light" ? "mv-creator-apply-form-field-light" : ""
          }`}
        >
          <div>Portfolio Link:</div>
          <Input />
        </div>
        {imageList.length > 0 && (
          <img
            className="mv-creator-apply-uploaded-image"
            src={imageList}
            alt="uploaded"
          />
        )}
        {/* ----------------------Profile Pic------------------------ */}
        <div
          className={`mv-creator-apply-form-field ${
            theme === "light" ? "mv-creator-apply-form-field-light" : ""
          }`}
        >
          <div>Profile Pic:</div>
          <Input
            value={fileName}
            onClick={() => uploadRef.click()}
            suffix={<UploadIcon func={() => uploadRef.click()} />}
          />
          <input
            onChange={getFile}
            type="file"
            name="filefield"
            style={{ display: "none" }}
            ref={(fileInput) => setUploadRef(fileInput)}
          />
        </div>
        {/* ----------------------Bio------------------------ */}
        <div
          className={`mv-creator-apply-form-field ${
            theme === "light" ? "mv-creator-apply-form-field-light" : ""
          }`}
        >
          <div>Bio:</div>
          <TextArea autoSize placeholder="Short Bio (less than 250)" />
        </div>
        {/* ----------------------Why do you want to be a Creator on Cryptovate?------------------------ */}
        <div
          className={`mv-creator-apply-form-field ${
            theme === "light" ? "mv-creator-apply-form-field-light" : ""
          }`}
        >
          <div>Why do you want to be a Creator on Cryptovate?</div>
          <TextArea autoSize />
        </div>
        {/* ----------------------How many years have you bee a Creator?------------------------ */}
        <div
          className={`mv-creator-apply-form-field ${
            theme === "light" ? "mv-creator-apply-form-field-light" : ""
          }`}
        >
          <div>How many years have you bee a Creator?</div>
          <div>
            <Select color="#c739ea" defaultValue="+10 Years" theme={theme}>
              <Option value="<1 Year">{"<1 Year"}</Option>
              <Option value="1-2  Years">1-2 Years</Option>
              <Option value="2-5  Years">2-5 Years</Option>
              <Option value="5-10 Years">5-10 Years</Option>
              <Option value="+10 Years">+10 Years</Option>
              <Option value="+20 Years">+20 Years</Option>
            </Select>
          </div>
        </div>
        {/* ----------------------What are you skill sets?------------------------ */}
        <div
          className={`mv-creator-apply-form-field ${
            theme === "light" ? "mv-creator-apply-form-field-light" : ""
          }`}
        >
          <div>What are you skill sets?</div>
          <TextArea autoSize />
        </div>
        {/* ----------------------What are you skill sets?------------------------ */}
        <div
          className={`mv-creator-apply-form-field ${
            theme === "light" ? "mv-creator-apply-form-field-light" : ""
          }`}
        >
          <div>Have you created NFTs before?</div>
          <Radio.Group
            defaultValue={"yes"}
            className="mv-creator-apply-radio-group"
          >
            <Radio value={"yes"}>Yes</Radio>
            <Radio value={"no"}>No</Radio>
          </Radio.Group>
        </div>
        {/* ----------------------Submit Button------------------------ */}
        <Button className="btn-colorfull mv-creator-apply-submit">
          Submit for Apporval
        </Button>
      </div>
    </div>
  );
};
export default ApplyCreator;
