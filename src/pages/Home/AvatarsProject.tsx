import React from "react";
import Pill from "../../components/Pill";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import Countdown from "./../../components/Countdown";
import ellipseAvatar from "../../assets/images/EllipseAvatar.svg";

export default function AvatarsProject() {
  return (
    <div>
      <Typography
        label="A non-fungible token is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger, that can be sold and traded. Types of NFT data units may be associated with digital files such as photos, videos, and audio A non-fungible token is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger, that can be sold and traded. Types of NFT data units may be associated with digital files such as photos, videos, and audioA non-fungible token is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger, that can be sold and traded. Types of NFT data units may be associated with digital files such as photos, videos, and audio"
        type="paragraph"
      />
      <div className="spirited-walk">
        <Typography
          label="Spirited Walk"
          type="title"
          className="spirited-walk__title"
        />
        <div className="flex-box flex-box--justify-between">
          <div>
            <Typography label="Created by" type="title2" />
            <Pill
              label="Lorem Ipsum"
              isSecondary={false}
              imgSrc= { ellipseAvatar }
            />
          </div>
          <div>
            <Typography label="Collections" type="title2" />
            <Button
              label="Art of Chris Alliel"
              onClick={() => {}}
              variant="tertiary"
            />
          </div>
          <div>
            <Typography label="Current bid" type="title2" />
            <div className="flex-box flex-box--items-end">
              <Typography type="paragraph2" label="3.00" />
              <Typography
                type="paragraph2"
                className="flex-box flex-box--items-end"
              >
                <sub>ETH</sub>
              </Typography>
              <Typography label="$8,748,48" type="label" />
            </div>
          </div>
        </div>
      </div>
      <div className="auction">
        <Typography label="Auction ends in" type="title2" />
        <Countdown targetDate={new Date(2023, 0, 15, 12, 0, 0)} />
        <Button
          className="mb-70"
          label="View NFT"
          onClick={() => {}}
          variant="primary"
        />
      </div>
    </div>
  );
}
