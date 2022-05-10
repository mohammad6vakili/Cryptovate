import React, { useRef } from "react";
import Input from "../../components/Input";
import Typography from "../../components/Typography";
import Card from "../../components/Card";
import { Select, Option } from "../../components/Select";
import "./style.scss";
import PurpleShade from "../../assets/images/purple-shade-circle.svg";
import BlueShade from "../../assets/images/blue-shade-circle.svg";
import Circles from "../../assets/images/circles.svg";
import normalImage from "../../assets/images/normal.svg";
import ellipseAvatar from "../../assets/images/EllipseAvatar.svg";
import TextCard from "../../components/TextCard";

import "flickity";

const ViewAll = ({ theme }: { theme: string }) => {
  const [section, setSection] = React.useState("Total Projects");

  const labels = [
    { label: "label1" },
    { label: "label2" },
    { label: "label3" },
    { label: "label4" },
    { label: "label5" },
    { label: "label6" },
    { label: "label7" },
    { label: "label8" },
    { label: "label9" },
  ];

  return (
    <>
      <div className="viewAll-wrapper">
        <div className="search-wrapper">
          <Input placeholder="Search" />
        </div>
        <Typography label="Explore Our Projects" type="heading" />

        <section className="viewAlls-wrapper">
          <img className="purple-shade" src={PurpleShade} alt="PurpleShade" />
          <img className="circles-shade" src={Circles} alt="circles" />
          <img className="blue-shade" src={BlueShade} alt="BluewShade" />
        </section>

        {/* selectTabSection */}
        <section>
          <div className="sectionSelector">
            <button
              className={`sectionPart ${
                section === "Total Projects" ? "purple" : ""
              }`}
              onClick={() => setSection("Total Projects")}
            >
              Total Projects
            </button>
            <button
              className={`sectionPart ${
                section === "Volumn Traded" ? "purple" : ""
              }`}
              onClick={() => setSection("Volumn Traded")}
            >
              Volumn Traded
            </button>
            <button
              className={`sectionPart ${
                section === "Total Donated" ? "purple" : ""
              }`}
              onClick={() => setSection("Total Donated")}
            >
              Total Donated
            </button>
            <button
              className={`sectionPart noBorder ${
                section === "Total Trades" ? "purple" : ""
              }`}
              onClick={() => setSection("Total Trades")}
            >
              Total Trades
            </button>
          </div>
        </section>

        {/* seacrhAndFilterSection */}
        <section>
          <div className="secondSearch-wrapper">
            <div className="firstSelector row">
              <Typography
                label="Total Collection"
                type="heading2"
                className="totalCollectionStyle"
              />
              <Input placeholder="Search" />
            </div>

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

        {/* cardContainerSection */}
        <section className="fourColumn-grid">
          {labels.map((label) => (
            <div className="width-290" key={label.label}>
              <Card
                imgSrc={normalImage}
                onClick={() => console.log("Clicked!")}
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

export default ViewAll;
