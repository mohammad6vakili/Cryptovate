import React from "react";
import "./Roadmap.css";
import { Button, Input } from "antd";
import linesBg from "./Assets/lines-bg.svg";
import { useNavigate } from "react-router";
import Poster from "../../assets/images/poster.jpeg";
import leftBg from "./Assets/left-blur.svg";
import rightBg from "./Assets/right-blur.svg";
import boxVectorLeft from "./Assets/roadmap-box-vector-left.svg";
import boxVectorRight from "./Assets/roadmap-box-vector-right.svg";
import locationIcon from "./Assets/location.svg";
import starIcon from "./Assets/star.svg";
import eyeIcon from "./Assets/eye.svg";
import rightDir from "./Assets/right-dir.svg";
import rightDirWhite from "./Assets/right-dir-white.svg";
import leftDir from "./Assets/left-dir.svg";
import leftDirWhite from "./Assets/left-dir-white.svg";


const Roadmap = ({ theme }: { theme: string }) => {
  return (
    <div className={`mv-page ${theme === "dark" && "mv-page-dark"}`}>
      <div
        className={`mv-page-search ${
          theme === "light" && "mv-page-search-light"
        }`}
      >
        <Input placeholder="Search" />
      </div>
      <div className="mv-page-title text-colorfull">
        The Cryptovate.io Roadmap
      </div>
      <div
        className={`mv-roadmap-video-wrapper ${
          theme === "light" && "mv-roadmap-video-wrapper-light"
        }`}
      >
        <img src={leftBg} alt="bg" />
        <img src={rightBg} alt="bg" />
        <video
          controls
          className="avatar-project-video"
          src={"https://www.w3schools.com/html/mov_bbb.mp4"}
          poster={Poster}
        ></video>
      </div>
      <div className="mv-roadmap-body">
        <div>
          <div className={theme === "light" ? "roadmap-body-box-light" : ""}>
            <img src={boxVectorRight} alt="bg" />
            <div></div>
            <div></div>
            <div className="text-colorfull">Our Vision</div>
            <div>
              A non-fungible token is a non-interchangeable unit of data stored
              on a blockchain, a form of digital ledger, that can be sold and
              traded. Types of NFT data units may be associated with digital
              files such as photos, videos, and audio A non-fungible token is a
              non-interchangeable unit of data stored on a blockchain, a form of
              digital ledger, that can be sold and traded. Types of NFT data
              units may be associated with digital files such as photos, videos,
              and audioA non-fungible token is a non-interchangeable unit of
              data stored on a blockchain, a form of digital ledger, that can be
              sold and traded. Types of NFT data units may be associated with
              digital files such as photos, videos, and audio
            </div>
            {theme==="light" ?
                <img className="mv-roadmap-right-dir" src={rightDirWhite} alt="arrow" />
              :
                <img className="mv-roadmap-right-dir" src={rightDir} alt="arrow" />
            }
          </div>
        </div>
        <div>
          <div className={theme === "light" ? "roadmap-body-box-light" : ""}>
            <img src={boxVectorLeft} alt="bg" />
            <div></div>
            <div></div>
            <div className="text-colorfull">Our Vision</div>
            <div>
              A non-fungible token is a non-interchangeable unit of data stored
              on a blockchain, a form of digital ledger, that can be sold and
              traded. Types of NFT data units may be associated with digital
              files such as photos, videos, and audio A non-fungible token is a
              non-interchangeable unit of data stored on a blockchain, a form of
              digital ledger, that can be sold and traded. Types of NFT data
              units may be associated with digital files such as photos, videos,
              and audioA non-fungible token is a non-interchangeable unit of
              data stored on a blockchain, a form of digital ledger, that can be
              sold and traded. Types of NFT data units may be associated with
              digital files such as photos, videos, and audio
            </div>
            {theme==="light" ?
                <img className="mv-roadmap-left-dir" src={leftDirWhite} alt="arrow" />
              :
                <img className="mv-roadmap-left-dir" src={leftDir} alt="arrow" />
            }          
          </div>
        </div>
        <div>
          <div className={theme === "light" ? "roadmap-body-box-light" : ""}>
            <img src={boxVectorRight} alt="bg" />
            <div></div>
            <div></div>
            <div className="text-colorfull">Our Vision</div>
            <div>
              A non-fungible token is a non-interchangeable unit of data stored
              on a blockchain, a form of digital ledger, that can be sold and
              traded. Types of NFT data units may be associated with digital
              files such as photos, videos, and audio A non-fungible token is a
              non-interchangeable unit of data stored on a blockchain, a form of
              digital ledger, that can be sold and traded. Types of NFT data
              units may be associated with digital files such as photos, videos,
              and audioA non-fungible token is a non-interchangeable unit of
              data stored on a blockchain, a form of digital ledger, that can be
              sold and traded. Types of NFT data units may be associated with
              digital files such as photos, videos, and audio
            </div>
            {theme==="light" ?
                <img className="mv-roadmap-right-dir" src={rightDirWhite} alt="arrow" />
              :
                <img className="mv-roadmap-right-dir" src={rightDir} alt="arrow" />
            }
          </div>
        </div>
        <div className="mv-roadmap-chart"></div>
        <div className="mv-roadmap-chart-div">
            <img src={eyeIcon} alt="vision" />
        </div>
        <div style={{top:"33%"}} className="mv-roadmap-chart-div">
            <img src={starIcon} alt="favourite" />
        </div>
        <div style={{top:"66%"}} className="mv-roadmap-chart-div">
            <img src={locationIcon} alt="location" />
        </div>
      </div>
      <div className="roadmap-submit-btn">
          <div>Full Lunch</div>
      </div>
    </div>
  );
};
export default Roadmap;
