import react from "react";
import "./Creators.css";
import { Option, Select } from "../../components/Select";
import { Input, Button } from "antd";
import { useNavigate } from "react-router";
import Poster from "../../assets/images/poster.jpeg";
import leftBg from "./Assets/left-blur.svg";
import rightBg from "./Assets/right-blur.svg";
import circleBg from "./Assets/circle-vector.svg";
import boxVector from "./Assets/creator-box-vector.svg";
import profileAvatar from "./Assets/creator-profile.png";
import creatorProfile from "./Assets/profile.png";
import Carousel from "react-elastic-carousel";

const Creators = ({ theme }: { theme: string }) => {
  const navigate = useNavigate();
  const array = [1, 2, 3];
  const profiles = [
    creatorProfile,
    creatorProfile,
    creatorProfile,
    creatorProfile,
    creatorProfile,
    creatorProfile,
    creatorProfile,
    creatorProfile,
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 420, itemsToShow: 2, pagination: false },
    { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4, pagination: false },
    { width: 1150, itemsToShow: 5, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 6, pagination: false },
    { width: 1750, itemsToShow: 6, pagination: false },
  ];

  return (
    <div className={`mv-page ${theme === "dark" && "mv-page-dark"}`}>
      <div
        className={`mv-page-search ${
          theme === "light" ? "mv-page-search-light" : ""
        }`}
      >
        <Input placeholder="Search" />
      </div>
      <div className="mv-page-title text-colorfull">Welcome Creators</div>
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
      <Button
        onClick={() => navigate("/creators/apply")}
        style={{ marginTop: "30px", width: "100px" }}
        className="btn-colorfull-green"
      >
        Apply
      </Button>
      <div className="mv-creators-body-title text-colorfull-green">
        Meet our Creators
      </div>
      <div
        className={`mv-creators-body-search-bar ${
          theme === "light" ? "mv-creators-body-search-bar-light" : ""
        }`}
      >
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
      <div className="mv-creators-top-three">
        {array &&
          array.length > 0 &&
          array.map((crator, index) => (
            <div
              className={`mv-creators-top-three-item ${
                theme === "light" ? "mv-creators-top-three-item-light" : ""
              }`}
            >
              <img src={boxVector} alt="bg" />
              <img src={profileAvatar} alt="profile avatar" />
              <div>
                <span className="color-primary">Biography:</span>
                <div>
                  Read exclusive biographies, watch videos & discover
                  fascinating stories about your favorite icons, musicians,
                  authors & historical figures.
                </div>
              </div>
              <div>
                <span>NFTS released</span>
                <span>Collections Released</span>
                <span>Organization</span>
              </div>
            </div>
          ))}
      </div>
      <div className="mv-creators-all-creators-title text-colorfull-green">
        All Creators
      </div>
      <Carousel
        breakPoints={breakPoints}
        isRTL={false}
        pagination={false}
        itemsToShow={6}
      >
        {profiles &&
          profiles.map((profile, index) => (
            <img src={profile} key={index} alt="profile avatar" />
          ))}
      </Carousel>
    </div>
  );
};
export default Creators;
