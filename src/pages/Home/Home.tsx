import React, { useRef, useEffect } from "react";
import Input from "../../components/Input";
import Typography from "../../components/Typography";
import Card from "../../components/Card";
import Pill from "../../components/Pill";
import Button from "../../components/Button";
import "./style.scss";
import Flickity from "react-flickity-component";
import PurpleShade from "../../assets/images/purple-shade-circle.svg";
import BlueShade from "../../assets/images/blue-shade-circle.svg";
import AvatarsShadow from "../../assets/images/avatar-shadow.png";
import AvatarsProjectImg from "../../assets/images/avatars-project.png";
import AvatarsImgPlate from "../../assets/images/avatars-plate.svg";
import AvatarsProfileRings from "../../assets/images/avatars-project-rings.svg";
import AvatarsProfileLeft from "../../assets/images/avatar-left.svg";
import AvatarsProfileRight from "../../assets/images/avatar-right.svg";
import normalImage from "../../assets/images/normal.svg";
import ellipseAvatar from "../../assets/images/EllipseAvatar.svg";
import creator from "../../assets/images/creator.svg";
import Circles from "../../assets/images/circles.svg";
import AvatarsProject from "./AvatarsProject";
import VideoDemo from "./VideoDemo";
import ChartCircle from "./../../components/Chart/Circle";
import SwiperCarousel from "./../../components/Carousel";
import ChartVector from "./VectorChart";
import "flickity";

const Home = ({ theme }: { theme: string }) => {
  const sliderRef = useRef(null);
  const sliderAvatarsRef = useRef(null);

  const carouselData = [
    <AvatarsProject />,
    <VideoDemo />,
    <ChartCircle />,
    <ChartVector />,
    <ChartVector />
  ]

  const handleNextClick = () => {
    const arrowNext = document.querySelector(
      ".avatars-project__details .carousel .next"
    );
    if (arrowNext) {
      // @ts-ignore
      arrowNext?.click();
    }
  };

  const handlePrevClick = () => {
    const arrowPrev = document.querySelector(
      ".avatars-project__details .carousel .previous"
    );
    if (arrowPrev) {
      // @ts-ignore
      arrowPrev?.click();
    }
  };

  return (
    <>
      <div className="home-wrapper">
        <div className="search-wrapper">
          <Input placeholder="Search" />
        </div>
        <Typography label="The hottest collections / projects" type="heading" />

        <section className="projects-wrapper">
          <img className="purple-shade" src={PurpleShade} alt="PurpleShade" />
          <img className="circles-shade" src={Circles} alt="circles" />
          <img className="blue-shade" src={BlueShade} alt="BluewShade" />

          <Flickity
            className={"carousel"}
            elementType={"section"}
            // @ts-ignore
            flickityRef={(c) => (sliderRef.current = c)}
            options={{
              initialIndex: 2,
              pauseAutoPlayOnHover: false,
              wrapAround: true,
              prevNextButtons: false,
              pageDots: true,
              contain: true,
            }}
          >
            <div className="carousel__card">
              <Card
                imgSrc= { normalImage }
                onClick={() => console.log("Clicked!")}
                pill={{
                  label: "Lorem Ipsum",
                  imgSrc: ellipseAvatar,
                  isSecondary: false,
                }}
              />
            </div>
            <div className="carousel__card">
              <Card
                imgSrc= { normalImage }
                onClick={() => console.log("Clicked!")}
                pill={{
                  label: "Lorem Ipsum",
                  imgSrc: ellipseAvatar,
                  isSecondary: false,
                }}
              />
            </div>
            <div className="carousel__card">
              <Card
                imgSrc= { normalImage }
                onClick={() => console.log("Clicked!")}
                pill={{
                  label: "Lorem Ipsum",
                  imgSrc: ellipseAvatar,
                  isSecondary: false,
                }}
              />
            </div>
            <div className="carousel__card">
              <Card
                imgSrc= { normalImage }
                onClick={() => console.log("Clicked!")}
                pill={{
                  label: "Lorem Ipsum",
                  imgSrc: ellipseAvatar,
                  isSecondary: false,
                }}
              />
            </div>
            <div className="carousel__card">
              <Card
                imgSrc= { normalImage }
                onClick={() => console.log("Clicked!")}
                pill={{
                  label: "Lorem Ipsum",
                  imgSrc: ellipseAvatar,
                  isSecondary: false,
                }}
              />
            </div>
          </Flickity>
        </section>

        <section className="monthly-reviews">
          <Card
            imgSrc= { normalImage }
            onClick={() => console.log("Clicked!")}
            size="large"
            title={{
              title: "Project of the month",
              variant: "primary",
            }}
            pill={{
              label: "Lorem Ipsum",
              imgSrc: ellipseAvatar,
              isSecondary: true,
            }}
            button={{
              onClick: () => alert("Button Clicked!"),
              label: "Visit Project",
              variant: "secondary",
            }}
          />
          <Card
            imgSrc= { creator }
            onClick={() => console.log("Clicked!")}
            size="large"
            title={{
              title: "Creator of the month",
              variant: "secondary",
            }}
            button={{
              onClick: () => alert("Button Clicked!"),
              label: "Visit Creator",
              variant: "secondary",
            }}
          />
        </section>

        <section className="avatars-project">
          <div className="avatars-project__profile">
            <div className="avatars-project__profile__shadow" />
            <img
              className="avatars-project__profile__pic"
              src={AvatarsProjectImg}
              alt="avatars-project-pic"
            />
            <img
              className="avatars-project__profile__rings"
              src={AvatarsProfileRings}
              alt="AvatarsProfileRings"
            />
            <img
              className="avatars-project__profile__plate"
              src={AvatarsImgPlate}
              alt="avatars-profile-plate"
            />
          </div>
          <Typography
            label="Avatars Project"
            type="heading2"
            className="avatars-project__title"
          />
          <div className="avatars-project__details">
            <SwiperCarousel children={carouselData} />
          </div>
          <img
            src={AvatarsProfileLeft}
            className="avatar-left-design"
            alt="avatar-left"
          />
          <img
            src={AvatarsProfileRight}
            className="avatar-right-design"
            alt="avatar-right"
          />
        </section>
      </div>
    </>
  );
};

export default Home;
