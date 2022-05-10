import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Typography from "../../components/Typography";
import Card from "../../components/Card";
import "./style.scss";
import PurpleShade from "../../assets/images/purple-shade-circle.svg";
import BlueShade from "../../assets/images/blue-shade-circle.svg";
import Circles from "../../assets/images/circles.svg";
import TextCard from "../../components/TextCard";
import Button from "../../components/Button";
import normalImage from "../../assets/images/normal.svg";
import ellipseAvatar from "../../assets/images/EllipseAvatar.svg";
import SwiperCarousel from "../../components/Carousel";

import "flickity";
import VideoDemo from "../Home/VideoDemo";

const CollectionsLanding = ({ theme }: { theme: string }) => {
  let navigate = useNavigate();

  const labels = [
    { label: "label1" },
    { label: "label2" },
    { label: "label3" },
  ];

  const cardData = (
    <div className="firstCardContainer mb">
      <Card
        imgSrc={normalImage}
        onClick={() => navigate("/collections/selected")}
        size="large"
      />
    </div>
  );

  const carouselData = [cardData, cardData, cardData, cardData, cardData];

  return (
    <>
      <div className="collection-wrapper">
        <div className="search-wrapper">
          <div>
            <Button
              className="viewAllButton"
              variant="secondary"
              onClick={() => navigate("/collections/viewAll")}
              label="View All Collections"
            ></Button>
          </div>
          <Input placeholder="Search" />
        </div>

        <section className="collections-wrapper">
          <img className="purple-shade" src={PurpleShade} alt="PurpleShade" />
          <img className="circles-shade" src={Circles} alt="circles" />
          <img className="blue-shade" src={BlueShade} alt="BluewShade" />
          <div className="firstCardContainer">
            <VideoDemo />,
          </div>
        </section>

        <section className="collectionOfTheMonth-wrapper">
          <img className="purple-shade" src={PurpleShade} alt="PurpleShade" />
          <img className="circles-shade" src={Circles} alt="circles" />
          <img className="blue-shade" src={BlueShade} alt="BluewShade" />
          <Typography label="Collection of the Month" type="heading" />
          <SwiperCarousel children={carouselData} />
        </section>

        <Typography label="Top Performing Collections" type="heading" />
        <section className="threeColumn-grid">
          {labels.map((label) => (
            <div className="width-330" key={label.label}>
              <Card
                imgSrc={normalImage}
                onClick={() => navigate("/collections/selected")}
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

export default CollectionsLanding;
