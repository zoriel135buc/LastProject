import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";

const Video = ({ page }) => {
  return (
    <>
      <div className="main">
        <div className="video-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/3iDnFU4wsok?si=Eq-CVSI5EroG-21c"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default Video;
