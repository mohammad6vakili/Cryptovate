import React from "react";
import { ICardProps } from "./types";
import "./style.scss";
import Pill from "../Pill";
import Button from "../Button";
import CardBox from "./CardBox";

const Card: React.FC<ICardProps> = ({ imgSrc, className, size, pill, title, button, onClick }) => {
  return (
    <div className="card-wrapper">
      {!!title && <div className={"card__title "+ (title.variant)}>
          {title.title}
      </div>}
      <CardBox imgSrc={imgSrc} className={className} size={size} pill={pill} onClick={onClick} />
      {/* @ts-ignore */}
      {!!button && <Button label={button?.label} onClick={button.onClick}  variant={button?.variant} />}
    </div>
  )
};

export default Card;
