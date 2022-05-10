import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input";
import Typography from "../../components/Typography";
import Card from "../../components/Card";
import Profile from "../../components/Profile";
import "./style.scss";
import PurpleShade from "../../assets/images/purple-shade-circle.svg";
import BlueShade from "../../assets/images/blue-shade-circle.svg";
import Circles from "../../assets/images/circles.svg";
import TextCard from "../../components/TextCard";
import Button from "../../components/Button";
import Countdown from "./../../components/Countdown";
import selectedNFTCollections from "../../assets/images/selectedNFT-collections.svg";
import selectedNFTProjects from "../../assets/images/selectedNFT-projects.svg"
import normalImage from "../../assets/images/normal.svg";
import ellipseAvatar from "../../assets/images/EllipseAvatar.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "flickity";

const SelectedNFT = ({ theme }: { theme: string }) => {
  let navigate = useNavigate();
  const { type } = useParams();

  const labels = [
    { label: "label1" },
    { label: "label2" },
    { label: "label3" },
    { label: "label1" },
    { label: "label2" },
    { label: "label3" },
  ];

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const rectangels=[1,2,3,4,5,6,7,8,9,10]

  return (
    <>
      <div className="selectedNFT-wrapper">
        <div className="search-wrapper">
          <Input placeholder="Search" />
        </div>

        <img src={ type === 'projects' ? selectedNFTProjects : selectedNFTCollections} alt="banner" className="topBanner" />
        <Button onClick={() => console.log("clicked")}>
          View Project/Collection
        </Button>

        <div className="projects-wrapper">
          <img className="purple-shade" src={PurpleShade} alt="PurpleShade" />
          <img className="circles-shade" src={Circles} alt="circles" />
          <img className="blue-shade" src={BlueShade} alt="BluewShade" />
          <div className="firstCardContainer">
            <Card
              imgSrc={normalImage}
              onClick={() => navigate("/projects/selected")}
              size="large"
            />
            <Typography label="Bio of the individual NFT" type="heading2" />
            <h4>
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
            </h4>
          </div>
          <div className="secondCardContainer">
            <div className="profileContainers">
              <Profile />
              <Profile />
            </div>
            <h3 style={{color:"white"}}>
              Auction ends in
            </h3>
            <Countdown targetDate={new Date(2023, 0, 15, 12, 0, 0)} />
            <TextCard />
            <Typography label="History" type="heading2" />
            <div className="historyContainer">
              {rectangels.map(i =>
                <div className="historyRectangles"/>
              )}
            </div>
            <div className="historyContainer">
              {rectangels.map(i =>
                <div className="historyRectangles"/>
              )}
            </div>
            <div className="historyContainer">
              {rectangels.map(i =>
                <div className="historyRectangles"/>
              )}
            </div>
          </div>
        </div>
        <Typography
          label="Other NFTs from same Project/Collection"
          type="heading"
        />
        <section className="threeColumn-grid">
          {labels.map((label) => (
            <div key={label.label}>
              <Card
                imgSrc={normalImage}
                onClick={() => navigate("/projects/selected")}
                size="normal"
                pill={{
                  label: "Lorem Ipsum",
                  imgSrc: ellipseAvatar,
                  isSecondary: false,
                }}
              />
              <TextCard />
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default SelectedNFT;
