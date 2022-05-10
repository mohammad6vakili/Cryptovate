import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Typography from "../../components/Typography";
import Card from "../../components/Card";
import { Option, Select } from "../../components/Select";
import "./style.scss";
import PurpleShade from "../../assets/images/purple-shade-circle.svg";
import BlueShade from "../../assets/images/blue-shade-circle.svg";
import Circles from "../../assets/images/circles.svg";
import normalImage from "../../assets/images/normal.svg";
import ellipseAvatar from "../../assets/images/EllipseAvatar.svg";
import TextCard from "../../components/TextCard";
import "flickity";
import SwiperCarousel from "../../components/Carousel";

const Projects = ({ theme }: { theme: string }) => {
  let navigate = useNavigate();

  const labels = [
    { label: "label1" },
    { label: "label2" },
    { label: "label3" },
    { label: "label4" },
    { label: "label5" },
    { label: "label6" },
    { label: "label7" },
    { label: "label8" },
  ];

  const cardData = (
    <>
      <div className="firstCardContainer">
        <Card
          imgSrc={normalImage}
          onClick={() => navigate("/selectedNFT/projects")}
          size="large"
          pill={{
            label: "Lorem Ipsum",
            imgSrc: ellipseAvatar,
            isSecondary: false,
          }}
        />
      </div>
      <div className="mid">
        <TextCard hasOnerow={true} type="4column" />
      </div>
    </>
  );

  const carouselData = [cardData, cardData, cardData, cardData, cardData];

  return (
    <>
      <div className="selected-wrapper">
        <div className="search-wrapper">
          <Input placeholder="Search" />
        </div>

        <section className="projectName-wrapper">
          <img className="purple-shade" src={PurpleShade} alt="PurpleShade" />
          <img className="circles-shade" src={Circles} alt="circles" />
          <img className="blue-shade" src={BlueShade} alt="BluewShade" />
          <Typography label="Project Name" type="heading" />
          <SwiperCarousel children={carouselData} />
        </section>

        <section>
          <div className="secondSearch-wrapper">
            <Input placeholder="Search" />

            {/* first selector */}
            <div className="firstSelector row-reverse">
              <Select theme={theme} placeholder="Sort by">
                <Option value="one">One</Option>
                <Option value="two">Two</Option>
                <Option value="three">Three</Option>
                <Option value="four">Four</Option>
              </Select>

              {/* second selector */}
              <Select theme={theme} placeholder="Filter">
                <Option value="one">One</Option>
                <Option value="two">Two</Option>
                <Option value="three">Three</Option>
                <Option value="four">Four</Option>
              </Select>
            </div>
          </div>
        </section>

        <section className="searchProejcts-container">
          {labels.map((label) => (
            <div className="width-290" key={label.label}>
              <Card
                imgSrc={normalImage}
                onClick={() => console.log("Clicked!")}
                size="medium"
                pill={{
                  label: "Lorem Ipsum",
                  imgSrc: ellipseAvatar,
                  isSecondary: false,
                }}
              />
              <TextCard type="2column" />
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Projects;
