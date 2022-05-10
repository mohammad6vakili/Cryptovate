import React from "react";
import "./style.scss";
import soundIcon from "../../assets/icons/sound.svg";
import BannerLogo from "../../assets/icons/new-logo.svg";
import Button from "../Button";
import Play from "../../assets/icons/play.svg";
import { useNavigate } from "react-router-dom";

const Banner = ({ theme }: { theme: string }) => {
  const navigate = useNavigate();

  return (
    <section className="banner">
      <div className="banner__controls">
        <Button
          className="verify-button verify-button-verify"
          label="Verify"
          onClick={() => console.log("Clicked!")}
        />
        <Button className="play-button" onClick={() => console.log("Clicked!")}>
          <img src={Play} alt="Play" />
        </Button>
        <Button
          className={`verify-button btn-border-colorfull ${
            theme === "light" ? "btn-border-colorfull-light" : ""
          }`}
          // variant="secondary"
          label="Sign up"
          onClick={() => navigate("/signup")}
        />
      </div>
      <img className="mv-landing-sound-icon" src={soundIcon} alt="sound" />
    </section>
  );
};

export default Banner;
