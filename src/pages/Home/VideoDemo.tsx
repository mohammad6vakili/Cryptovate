import React from "react";
import Poster from "../../assets/images/poster.jpeg";
// import DummyVideo from '../../assets/videos/mov_bbb.mp4';

export default function AvatarsProject() {
  return (
    <div className="avatar-project-video-wrapper">
      <video
        controls
        className="avatar-project-video"
        src={"https://www.w3schools.com/html/mov_bbb.mp4"}
        poster={Poster}
      ></video>
    </div>
  );
}
