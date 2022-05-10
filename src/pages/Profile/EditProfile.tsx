import React from "react";
import "./EditProfile.css";
import { Input, Button } from "antd";
import { Option, Select } from "../../components/Select";
import { useNavigate } from "react-router";
import leftBlur from "./Assets/left-blur.svg";
import rightBlur from "./Assets/right-blur.svg";
import profileImage from "./Assets/profile.png";
import bigNftImage from "./Assets/big-nft-image.svg";
import seperateIcon from "./Assets/seperate.svg";
import saveIcon from "./Assets/save-icon.svg";
import profileImageIcon from "./Assets/profile-image.svg";

const { TextArea } = Input;

const EditProfile = ({ theme }: { theme: string }) => {
  const navigate = useNavigate();
  const data = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={`mv-page ${theme === "dark" && "mv-page-dark"}`}>
      <img className="left-blur-bg" src={leftBlur} alt="bg" />
      <img className="right-blur-bg" src={rightBlur} alt="bg" />
      <div
        className={`mv-page-search ${
          theme === "light" ? "mv-page-search-light" : ""
        }`}
      >
        <Input placeholder="Search" />
        <Button
          onClick={() => navigate("/profile")}
          className={`btn-border-colorfull mv-profile-edit-profile-button ${
            theme === "light" ? "mv-profile-edit-profile-button-light" : ""
          }`}
        >
          Save Changes
        </Button>
      </div>
      <div className="signup-create-profile">
        <div>
          <span>Elements to change</span>
          <Button>Preview</Button>
          <span
            style={{
              position: "absolute",
              right: "90px",
              cursor: "pointer",
              color: "#c739ea",
              zIndex: "99999999",
            }}
          >
            Preview
          </span>
        </div>
        <div>
          <div>
            <div>
              <span className={theme === "light" ? "text-light-signup" : ""}>
                Profile Name:
              </span>
              <div>
                <Input
                  className={
                    theme === "dark" ? "text-dark-signup" : "text-light-signup"
                  }
                />
                <Button
                  id="mv-edit-profile-first-button"
                  className="btn-border-colorfull"
                >
                  <span>Apply</span>
                </Button>
              </div>
            </div>
            <div>
              <span className={theme === "light" ? "text-light-signup" : ""}>
                Choose Banner:
              </span>
              <div>
                <Select theme={theme}>
                  <Option value="1">item 1</Option>
                  <Option value="1">item 1</Option>
                  <Option value="1">item 1</Option>
                  <Option value="1">item 1</Option>
                </Select>
                <Button>Apply</Button>
              </div>
            </div>
            <div>
              <span className={theme === "light" ? "text-light-signup" : ""}>
                Profile Border Color:
              </span>
              <div>
                <Select theme={theme} defaultValue="#C739EA">
                  <Option value="#C739EA">#C739EA</Option>
                  <Option value="#C739EA">#C739EA</Option>
                  <Option value="#C739EA">#C739EA</Option>
                  <Option value="#C739EA">#C739EA</Option>
                </Select>
                <Button>Apply</Button>
              </div>
            </div>
            <div style={{ marginBottom: "5px" }}>
              <span
                id="mv-edit-profile-form-space-box"
                className={theme === "light" ? "text-light-signup" : ""}
              >
                Profile Picture:
                <Select placeholder="Select Which NFT to use ">
                  <Option value="item 1">item 1</Option>
                  <Option value="item 1">item 1</Option>
                  <Option value="item 1">item 1</Option>
                  <Option value="item 1">item 1</Option>
                </Select>
              </span>
              <div>
                <Select theme={theme} defaultValue="#David jobs 3256478">
                  <Option value="#David jobs 3256478">
                    #David jobs 3256478
                  </Option>
                  <Option value="#David jobs 3256478">
                    #David jobs 3256478
                  </Option>
                  <Option value="#David jobs 3256478">
                    #David jobs 3256478
                  </Option>
                  <Option value="#David jobs 3256478">
                    #David jobs 3256478
                  </Option>
                </Select>
                <Button>Apply</Button>
              </div>
            </div>
            <a
              href="#"
              style={{ color: "#C739EA", textDecoration: "underline" }}
            >
              Crop/Arrange Pic
            </a>
            <div style={{ marginTop: "20px" }}>
              <span className={theme === "light" ? "text-light-signup" : ""}>
                Bio:
              </span>
              <div>
                <TextArea
                  autoSize
                  placeholder="Enter your Bio or write a short story poem."
                />
                <Button>Apply</Button>
              </div>
            </div>
            <div style={{ marginBottom: "5px" }}>
              <span
                id="mv-edit-profile-form-space-box"
                className={theme === "light" ? "text-light-signup" : ""}
              >
                Wallet Address:
              </span>
              <div>
                <Select theme={theme}>
                  <Option value="1">item 1</Option>
                  <Option value="2">item 2</Option>
                  <Option value="3">item 3</Option>
                  <Option value="4">item 4</Option>
                </Select>
                <Button>Apply</Button>
              </div>
            </div>
          </div>
          <div className="mv-edit-profile-view-profile-box">
            <div>
              <img className="mv-edit-profile-view-profile-avatar" src={profileImage} alt="profile" />
              <div>George Karatasha</div>
              <div className={theme === "light" ? "text-light-signup" : ""}>
                A non-fungible token is a non-interchangeable unit of data
                stored on a blockchain, a form of digital ledger, that can be
                sold and traded. Types of NFT data units may be associated with
                digital files such as photos, videos, and audio A non-fungible
                token is a non-interchangeable unit of data stored on a
                blockchain, a form of digital ledger, that can be sold and
                traded. Types of NFT data units may be associated with digital
                files such as photos, videos, and audioA non-fungible token is a
                non-interchangeable unit of data stored on a blockchain, a form
                of digital ledger,
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mv-edit-profile-suggest-list">
        <div className="mv-edit-profile-suggest-list-title">
          <span className="text-colorfull">Rearrange</span>
          <Select theme={theme} defaultValue="#C739EA">
            <Option value="#C739EA">#C739EA</Option>
            <Option value="#C739EA">#C739EA</Option>
            <Option value="#C739EA">#C739EA</Option>
            <Option value="#C739EA">#C739EA</Option>
          </Select>
        </div>
        <div>
          {data.map((item, index) => (
            <div
              style={{ position: "relative" }}
              className={`mv-profile-nft-item mv-profile-nft-big-item ${
                theme === "light" ? "mv-profile-nft-item-light" : ""
              }`}
              key={index}
            >
              <img src={bigNftImage} alt="nft" />
              <div>
                <div>
                  <div># Avatars 2 c254</div>
                </div>
                <div>
                  <div>
                    <div>Price</div>
                    <div style={{ color: "#C739EA" }}>12 $</div>
                  </div>
                  <img src={seperateIcon} alt="seperate" />
                  <div>
                    <div>Rarity number</div>
                    <div style={{ color: "#4399F7" }}>4000</div>
                  </div>
                </div>
              </div>
              <img
                className="mv-edit-profile-save-icon"
                src={saveIcon}
                alt="save"
              />
              <div
                className={`mv-edit-profile-name-box ${
                  theme === "light" ? "mv-edit-profile-name-box-light" : ""
                }`}
              >
                <img src={profileImageIcon} alt="profile" />
                @Chris Alliel
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
