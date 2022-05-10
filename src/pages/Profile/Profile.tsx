import React from "react";
import "./Profile.css";
import { Input, Button } from "antd";
import { useNavigate } from "react-router";
import { Option, Select } from "../../components/Select";
import leftBlur from "./Assets/left-blur.svg";
import rightBlur from "./Assets/right-blur.svg";
import profileBanner from "./Assets/profile-banner.png";
import profileAvatar from "./Assets/profileAvatar.png";
import nftImage from "./Assets/nft-image.png";
import bigNftImage from "./Assets/big-nft-image.svg";
import saveIcon from "./Assets/save-icon.svg";
import seperateIcon from "./Assets/seperate.svg";

const Profile = ({ theme }: { theme: string }) => {
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
          onClick={() => navigate("/profile/edit")}
          className={`btn-border-colorfull mv-profile-edit-profile-button ${
            theme === "light" ? "mv-profile-edit-profile-button-light" : ""
          }`}
        >
          Edit Profile
        </Button>
      </div>
      <div className="mv-profile-banner">
        <img src={profileBanner} alt="banner" />
        <div>Hello David Jobs</div>
        <Button className="btn-colorfull">View Creator Profile</Button>
      </div>
      <div
        className={`mv-profile-section-one ${
          theme === "light" ? "mv-profile-section-one-light" : ""
        }`}
      >
        <div>
          <img src={profileAvatar} alt="avatar" />
          <div className="text-colorfull">George Karatasha</div>
          <div>
            <div className="text-colorfull">Bio of the individual NFT</div>
            <div>
              A non-fungible token is a non-interchangeable unit of data stored
              on a blockchain, a form of digital ledger, that can be sold and
              traded. Types of NFT data units may be associated with digital
              files such as photos, videos, and audio A non-fungible token is a
              non-interchangeable unit of data stored on a blockchain, a form of
              digital ledger, that can be sold and traded. Types of NFT data
              units may be associated with digital files such as photos, videos,
              and audioA non-fungible token is a non-interchangeable unit of
              data stored on a blockchain, a form of digital ledger,{" "}
            </div>
          </div>
          <div>
            <a href="#">Bio</a>
            <a href="#">Stats</a>
            <a href="#">QR code</a>
          </div>
        </div>
        <div>
          <div>
            <div className="text-colorfull">Favorite NFTs</div>
            <Button className="btn-border-colorfull">View All</Button>
          </div>
          <div>
            {data.map((item, index) => (
              <div
                className={`mv-profile-nft-item ${
                  theme === "light" ? "mv-profile-nft-item-light" : ""
                }`}
                key={index}
              >
                <img src={nftImage} alt="nft" />
                <div>
                  <div>
                    <div># Avatars 2 c254</div>
                    <img src={saveIcon} alt="save" />
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`mv-profile-section-two ${
          theme === "light" ? "mv-profile-section-two-light" : ""
        }`}
      >
        <div>
          <Input placeholder="Search" />
          <Select theme={theme} placeholder="Sort by">
            <Option value="Trending">Trending</Option>
            <Option value="A-Z">A-Z</Option>
            <Option value="Z-A">Z-A</Option>
            <Option value="Lowest Trade Volume">Lowest Trade Volume</Option>
            <Option value="Highest Trade Volume">Highest Trade Volume</Option>
            <Option value="Other">Other</Option>
          </Select>
        </div>
        <div>
          {data.map((item, index) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Profile;
