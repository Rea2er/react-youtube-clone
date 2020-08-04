import React from "react";
import { Divider } from "semantic-ui-react";
import VideoGridHeader from "./VideoGridHeader/VideoGridHeader";
import VideoPreview from "../VideoPreview/VideoPreview";
import "./VideoGrid.scss";

const VideoGrid = (props) => {
  const divider = props.hideDivider ? null : <Divider />;
  return (
    <>
      <VideoGridHeader title="Trending" />
      <div className="video-grid">
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
      </div>
      {divider}
    </>
  );
};

export default VideoGrid;
