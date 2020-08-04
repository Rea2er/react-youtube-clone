import React from "react";
import { Checkbox, Divider } from "semantic-ui-react";
import VideoPreview from "../../VideoPreview/VideoPreview";

import "./NextUpVideo.scss";
const NextUpVideo = () => {
  return (
    <>
      <div className="next-up-container">
        <h4>Up next</h4>
        <div className="up-next-toggle">
          <span>Autoplay</span>
          <Checkbox toggle defaultChecked />
        </div>
      </div>
      <VideoPreview horizontal={true} />
      <Divider />
    </>
  );
};

export default NextUpVideo;
