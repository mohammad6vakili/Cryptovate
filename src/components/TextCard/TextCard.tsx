import React from "react";
import { ITextCardProps } from "./types";
import "./style.scss";
import discountIcon from "../../assets/images/Discount.svg";
import seperatorIcon from "../../assets/images/Seperator.svg";

const TextCard: React.FC<ITextCardProps> = ({ type, className = "" , hasOnerow}) => {
  return (
    <>
      <div
        className={
          type === "2column"
            ? "twoColumnTextCardWrapper"
            : "threeColumnTextCardWrapper"
        }
      >
        { !hasOnerow &&
        <div className="Row">
          <div className="purple"># Avatars 2 c254</div>
          <img
            src={discountIcon}
            alt="discount"
            className="discountIcon"
            width={28}
          />
        </div>}
        <div className="Row" >
          <div className="secondRowText">
            Qty
            <br />
            <div className="purple">12</div>
          </div>
          {type !== "2column" && (
            <>
              <img
                src={seperatorIcon}
                alt="seperator"
                className="seperatorIcon"
                width={12}
              />
              <div className="secondRowText">
                volumn
                <br />
                <div className="purple">50</div>
              </div>
            </>
          )}
          {type === "4column" && (
            <>
              <img
                src={seperatorIcon}
                alt="seperator"
                className="seperatorIcon"
                width={12}
              />
              <div className="secondRowText">
                volumn Traded
                <br />
                <div className="purple">50.00</div>
              </div>
            </>
          )}
          <img
            src={seperatorIcon}
            alt="seperator"
            className="seperatorIcon"
            width={12}
          />
          <div className="secondRowText">
            highest last sale
            <br />
            <div className="blue">4000</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextCard;
