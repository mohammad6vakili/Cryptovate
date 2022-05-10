import React from "react";
import "./Sell.css";
import { Button, Input } from "antd";
import leftBg from "./Assets/left-blur.svg";
import rightBg from "./Assets/right-blur.svg";
import circleBg from "./Assets/circleBg.svg";
import productImage from "./Assets/product.svg";
import miniAvatar from "./Assets/miniAvatar.svg";
import { Option, Select } from "../../components/Select";
import Countdown from "./../../components/Countdown";
// const {Option}=Select;

const Sell = ({ theme }: { theme: string }) => {
  return (
    <div className={`mv-page ${theme === "dark" && "mv-page-dark"}`}>
      <img className="left-blur-bg" src={leftBg} alt="bg" />
      <img className="right-blur-bg" src={rightBg} alt="bg" />
      <div
        className={`mv-page-search ${
          theme === "dark" && "mv-page-search-dark"
        }`}
      >
        <Input placeholder="Search" />
      </div>
      <div
        className={`mv-sell-body ${theme === "light" && "mv-sell-body-light"}`}
      >
        <div>
          <div>
            <img src={miniAvatar} alt="avatar" />
            @Chris Alliel
          </div>
          <div>List item for sale</div>
          <div>
            <div>
              <div>Type:</div>
              <Input />
            </div>
            <div>
              <div>Auction ends in</div>
              <Countdown targetDate={new Date(2023, 0, 15, 12, 0, 0)} />
            </div>
          </div>
          <div>
            <div
              className={`mv-sell-field ${
                theme === "light" ? "mv-sell-field-light" : ""
              }`}
            >
              <div>Price</div>
              <Select placeholder="">
                <Option value="ETH">
                  <svg
                    width="13"
                    height="20"
                    viewBox="0 0 13 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 10L6.28571 0L12.5714 10L6.28571 13.7143L0 10Z"
                      fill="#C739EA"
                    />
                    <path
                      d="M0 12.2861L6.28571 20.0004L12.5714 12.2861L6.28571 16.0004L0 12.2861Z"
                      fill="#C739EA"
                    />
                  </svg>
                  ETH
                </Option>
              </Select>
            </div>
            <div
              style={{ paddingTop: "50px" }}
              className={`mv-sell-field ${
                theme === "light" ? "mv-sell-field-light" : ""
              }`}
            >
              <Input />
              <span>$ 40,2544,000 Total</span>
            </div>
          </div>
          <div>
            <div
              style={{ width: "100%" }}
              className={`mv-sell-field ${
                theme === "light" ? "mv-sell-field-light" : ""
              }`}
            >
              <div>Duration:</div>
              <Select placeholder="">
                <Option value="7 Days">
                  <svg
                    width="19"
                    height="22"
                    viewBox="0 0 19 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.508929 8.25H18.4911C18.771 8.25 19 8.48203 19 8.76562V19.9375C19 21.0762 18.0882 22 16.9643 22H2.03571C0.91183 22 0 21.0762 0 19.9375V8.76562C0 8.48203 0.229018 8.25 0.508929 8.25ZM19 6.35938V4.8125C19 3.67383 18.0882 2.75 16.9643 2.75H14.9286V0.515625C14.9286 0.232031 14.6996 0 14.4196 0H12.7232C12.4433 0 12.2143 0.232031 12.2143 0.515625V2.75H6.78571V0.515625C6.78571 0.232031 6.5567 0 6.27679 0H4.58036C4.30045 0 4.07143 0.232031 4.07143 0.515625V2.75H2.03571C0.91183 2.75 0 3.67383 0 4.8125V6.35938C0 6.64297 0.229018 6.875 0.508929 6.875H18.4911C18.771 6.875 19 6.64297 19 6.35938Z"
                      fill="#C739EA"
                    />
                  </svg>
                  7 Days
                </Option>
              </Select>
            </div>
          </div>
          <div>
              <Button>Buy Now</Button>
          </div>
        </div>
        <div>
          <img src={circleBg} alt="bg" />
          <img src={productImage} alt="product" />
        </div>
      </div>
    </div>
  );
};
export default Sell;
