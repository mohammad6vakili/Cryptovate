import react, { useState } from "react";
import "./Info.css";
import circleBg from "./Assets/circle-vector.svg";
import { Input, Button } from "antd";
import Poster from "../../assets/images/poster.jpeg";
import leftBg from "./Assets/left-blur.svg";
import rightBg from "./Assets/right-blur.svg";
import creatorBoxVector from "./Assets/creator-box-vector.svg";
import chartDark from "./Assets/chart-dark.png";
import chartLight from "./Assets/chart-light.png";
import Carousel from "react-elastic-carousel";
import rightArrow from "./Assets/right-arrow 2.svg";
import leftArrow from "./Assets/left-arrow.svg";

const Info = ({ theme }: { theme: string }) => {
  const [tab, setTab] = useState(0);
  const array = [1, 2, 3, 4, 5];

  return (
    <div className={`mv-page ${theme === "dark" && "mv-page-dark"}`}>
      <div
        className={`mv-page-search ${
          theme === "light" ? "mv-page-search-light" : ""
        }`}
      >
        <Input placeholder="Search" />
      </div>
      <div className="mv-page-title text-colorfull">Information</div>
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
        className={
          theme === "light"
            ? "mv-info-tabs-button-light"
            : "mv-info-tabs-button"
        }
      >
        <Button
          onClick={() => setTab(0)}
          className={tab === 0 ? "mv-info-tabs-button-selected" : ""}
          id={
            tab === 0 && theme === "light"
              ? "mv-info-tabs-button-selected-light"
              : ""
          }
        >
          Our Mission
        </Button>
        <Button
          className={tab === 1 ? "mv-info-tabs-button-selected" : ""}
          id={
            tab === 1 && theme === "light"
              ? "mv-info-tabs-button-selected-light"
              : ""
          }
          onClick={() => setTab(1)}
        >
          Overall Stats
        </Button>
        <Button
          className={tab === 2 ? "mv-info-tabs-button-selected" : ""}
          id={
            tab === 2 && theme === "light"
              ? "mv-info-tabs-button-selected-light"
              : ""
          }
          onClick={() => setTab(2)}
        >
          Helpful Resources
        </Button>
      </div>
      <div
        className={
          theme === "light" ? "mv-info-content-light" : "mv-info-content"
        }
      >
        <img src={creatorBoxVector} alt="bg" />
        {tab === 0 && (
          <div>
            <span className="text-very-colorfull">Our Mission</span>
            <span>
              A non-fungible token is a non-interchangeable unit of data stored
              on a blockchain, a form of digital ledger, that can be sold and
              traded. Types of NFT data units may be associated with digital
              files such as photos, videos, and audio A non-fungible token is a
              non-interchangeable unit of data stored on a blockchain, a form of
              digital ledger, that can be sold and traded. Types of NFT data
              units may be associated with digital files such as photos, videos,
              and audioA non-fungible token is a non-interchangeable unit of
              data stored on a blockchain, a form of digital ledger, A
              non-fungible token is a non-interchangeable unit of data stored on
              a blockchain, a form of digital ledger, that can be sold and
              traded. Types of NFT data units may be associated with digital
              files such as photos, videos, and audio A non-fungible token is a
              non-interchangeable unit of data stored on a blockchain, a form of
              digital ledger, that can be sold and traded. Types of NFT data
              units may be associated with digital files such as photos, videos,
              and audioA non-fungible token is a non-interchangeable unit of
              data stored on a blockchain, a form of digital ledger
            </span>
          </div>
        )}
        {tab === 1 && (
          <div>
            <span className="text-very-colorfull">Overall Stats</span>
            <Carousel
              renderArrow={({ type, onClick }) => (
                <div onClick={onClick}>
                  {type === "PREV" ? (
                    <img className="mv-info-carousel-arrow" src={leftArrow} alt="arrow" />
                  ) : (
                    <img className="mv-info-carousel-arrow" src={rightArrow} alt="arrow" />
                  )}
                </div>
              )}
              isRTL={false}
              pagination={true}
              itemsToShow={1}
            >
              {array.map((img, index) => {
                if (theme === "light") {
                  return (
                    <img
                      className="mv-info-chart-image"
                      src={chartLight}
                      alt="chart"
                    />
                  );
                } else {
                  return (
                    <img
                      className="mv-info-chart-image"
                      src={chartDark}
                      alt="chart"
                    />
                  );
                }
              })}
            </Carousel>
          </div>
        )}
        {tab === 2 &&
          <div>
            <span className="text-very-colorfull">Helpful Resources</span>
            <div className={`mv-info-coming-soon ${theme==="light" ? "mv-info-coming-soon-light" : ""}`}>Coming Soon</div>
          </div>
        }
      </div>
    </div>
  );
};
export default Info;
