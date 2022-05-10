import React from 'react';
import Pill from '../Pill';
import { ICardBox } from '../Card/types';


const CardBox: React.FC<ICardBox> = ({ imgSrc, className, size, pill , onClick }) => {
    return (
      <div onClick={onClick}
        className={`card${size ? ` card--${size}` : ""}${
          className ? ` ${className}` : ""
        }`}
      >
        <img src={imgSrc || ""} alt="Preview" className="imgSrc cover" />
        <div className="card__pill">
          {!!pill && (
            <Pill imgSrc={pill.imgSrc} label={pill.label} isSecondary={pill.isSecondary} />
          )}
        </div>
      </div>
    );
  }

  export default CardBox;