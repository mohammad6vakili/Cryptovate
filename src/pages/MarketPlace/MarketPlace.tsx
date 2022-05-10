import React from "react";
import "./MarketPlace.css";
import { Option, Select } from "../../components/Select";
import { Input, Button } from "antd";
import leftBlur from "./Assets/left-blur.svg";
import rightBlur from "./Assets/right-blur.svg";
import itemImage from "./Assets/item-image.png";
import saveIcon from "./Assets/save-icon.svg";
import avatarImage from "./Assets/avatar.svg";
import seperateLine from "./Assets/seperate-line.svg";

const MarketPlace = ({ theme }: { theme: string }) => {
  const data = [1, 2, 3, 4];

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
      </div>
      <div
        className={`mv-marketplace-section ${
          theme === "light" ? "mv-marketplace-section-light" : ""
        }`}
      >
        <div>
          <span className="text-colorfull">Trending Projects</span>
          <Button className="btn-border-colorfull">
            <span>View All</span>
          </Button>
        </div>
        <div>
          {data &&
            data.length > 0 &&
            data.map((boxData, index) => (
              <div
                className={`mv-marketplace-item ${
                  theme === "light" ? "mv-marketplace-item-light" : ""
                }`}
                key={index}
              >
                <div>
                  <img src={itemImage} alt="marketplace item" />
                  <img src={saveIcon} alt="save" />
                  <div>
                    <img src={avatarImage} alt="avatar" />
                    <span>@Chris Alliel</span>
                  </div>
                </div>
                <div>
                  <div># Avatars 2 c254</div>
                  <div>
                    <div>
                      <div style={{ fontSize: "13px" }}>Price</div>
                      <div style={{ color: "#C739EA", fontSize: "20px" }}>
                        12 $
                      </div>
                    </div>
                    <img src={seperateLine} alt="seperator" />
                    <div>
                      <div style={{ fontSize: "13px" }}>Rarity number</div>
                      <div style={{ color: "#4399F7", fontSize: "20px" }}>
                        4000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        className={`mv-marketplace-section ${
          theme === "light" ? "mv-marketplace-section-light" : ""
        }`}
      >
        <div>
          <span className="text-colorfull-green">Trending Collections</span>
          <Button className="btn-border-colorfull">
            <span>View All</span>
          </Button>
        </div>
        <div>
          {data &&
            data.length > 0 &&
            data.map((boxData, index) => (
              <div
                className={`mv-marketplace-item ${
                  theme === "light" ? "mv-marketplace-item-light" : ""
                }`}
                key={index}
              >
                <div>
                  <img src={itemImage} alt="marketplace item" />
                  <img src={saveIcon} alt="save" />
                  <div>
                    <img src={avatarImage} alt="avatar" />
                    <span>@Chris Alliel</span>
                  </div>
                </div>
                <div>
                  <div># Avatars 2 c254</div>
                  <div>
                    <div>
                      <div style={{ fontSize: "13px" }}>Price</div>
                      <div style={{ color: "#C739EA", fontSize: "20px" }}>
                        12 $
                      </div>
                    </div>
                    <img src={seperateLine} alt="seperator" />
                    <div>
                      <div style={{ fontSize: "13px" }}>Rarity number</div>
                      <div style={{ color: "#4399F7", fontSize: "20px" }}>
                        4000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        className={`mv-marketplace-section ${
          theme === "light" ? "mv-marketplace-section-light" : ""
        }`}
      >
        <div>
          <span className="text-colorfull">Newly Launched projects</span>
          <Button className="btn-border-colorfull">
            <span>View All</span>
          </Button>
        </div>
        <div>
          {data &&
            data.length > 0 &&
            data.map((boxData, index) => (
              <div
                className={`mv-marketplace-item ${
                  theme === "light" ? "mv-marketplace-item-light" : ""
                }`}
                key={index}
              >
                <div>
                  <img src={itemImage} alt="marketplace item" />
                  <img src={saveIcon} alt="save" />
                  <div>
                    <img src={avatarImage} alt="avatar" />
                    <span>@Chris Alliel</span>
                  </div>
                </div>
                <div>
                  <div># Avatars 2 c254</div>
                  <div>
                    <div>
                      <div style={{ fontSize: "13px" }}>Price</div>
                      <div style={{ color: "#C739EA", fontSize: "20px" }}>
                        12 $
                      </div>
                    </div>
                    <img src={seperateLine} alt="seperator" />
                    <div>
                      <div style={{ fontSize: "13px" }}>Rarity number</div>
                      <div style={{ color: "#4399F7", fontSize: "20px" }}>
                        4000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        className={`mv-marketplace-section ${
          theme === "light" ? "mv-marketplace-section-light" : ""
        }`}
      >
        <div>
          <span className="text-colorfull-green">
            Freshly Minted Collections Collections
          </span>
          <Button className="btn-border-colorfull">
            <span>View All</span>
          </Button>
        </div>
        <div>
          {data &&
            data.length > 0 &&
            data.map((boxData, index) => (
              <div
                className={`mv-marketplace-item ${
                  theme === "light" ? "mv-marketplace-item-light" : ""
                }`}
                key={index}
              >
                <div>
                  <img src={itemImage} alt="marketplace item" />
                  <img src={saveIcon} alt="save" />
                  <div>
                    <img src={avatarImage} alt="avatar" />
                    <span>@Chris Alliel</span>
                  </div>
                </div>
                <div>
                  <div># Avatars 2 c254</div>
                  <div>
                    <div>
                      <div style={{ fontSize: "13px" }}>Price</div>
                      <div style={{ color: "#C739EA", fontSize: "20px" }}>
                        12 $
                      </div>
                    </div>
                    <img src={seperateLine} alt="seperator" />
                    <div>
                      <div style={{ fontSize: "13px" }}>Rarity number</div>
                      <div style={{ color: "#4399F7", fontSize: "20px" }}>
                        4000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <img
          style={{ top: "0", height: "80vh" }}
          className="left-blur-bg"
          src={leftBlur}
          alt="bg"
        />
      </div>
      <div
        style={{ marginTop: "120px" }}
        className={`mv-marketplace-section ${
          theme === "light" ? "mv-marketplace-section-light" : ""
        }`}
      >
        <div>
          <span style={{ fontSize: "24px" }} className="text-colorfull">
            Customize your search
          </span>
          <Select theme={theme} placeholder="Status">
            <Option value="On Auction">On Auction</Option>
            <Option value="Freshly Sold">Freshly Sold</Option>
            <Option value="For Sale">For Sale</Option>
            <Option value="Held">Held</Option>
            <Option value="Any">Any</Option>
          </Select>
          <Select theme={theme} placeholder="Grouping">
            <Option value="Projects">Projects</Option>
            <Option value="Collections">Collections</Option>
            <Option value="Any">Any</Option>
          </Select>
          <Select theme={theme} placeholder="Donation Industry">
            <Option value="Green initiatives">Green initiatives</Option>
            <Option value="Wild life">Wild life</Option>
            <Option value="Oceans">Oceans</Option>
            <Option value="Catastrophe">Catastrophe</Option>
          </Select>
          <Select theme={theme} placeholder="Floor Price">
            <Option value="Low to High">Low to High</Option>
            <Option value="High to Low">High to Low</Option>
            <Option value="Specified Range">Specified Range</Option>
            <Option value="Any">Any</Option>
          </Select>
          <Button style={{ height: "35px" }} className="btn-colorfull">
            Sort
          </Button>
        </div>
        <div>
          {data &&
            data.length > 0 &&
            data.map((boxData, index) => (
              <div
                className={`mv-marketplace-item ${
                  theme === "light" ? "mv-marketplace-item-light" : ""
                }`}
                key={index}
              >
                <div>
                  <img src={itemImage} alt="marketplace item" />
                  <img src={saveIcon} alt="save" />
                  <div>
                    <img src={avatarImage} alt="avatar" />
                    <span>@Chris Alliel</span>
                  </div>
                </div>
                <div>
                  <div># Avatars 2 c254</div>
                  <div>
                    <div>
                      <div style={{ fontSize: "13px" }}>Price</div>
                      <div style={{ color: "#C739EA", fontSize: "20px" }}>
                        12 $
                      </div>
                    </div>
                    <img src={seperateLine} alt="seperator" />
                    <div>
                      <div style={{ fontSize: "13px" }}>Rarity number</div>
                      <div style={{ color: "#4399F7", fontSize: "20px" }}>
                        4000
                      </div>
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
export default MarketPlace;
