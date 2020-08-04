import React, { Component } from "react";
import VideoPreview from "../../components/VideoPreview/VideoPreview";
import "./Watch.scss";

class Watch extends Component {
  render() {
    return (
      <React.Fragment>
        <VideoPreview horizontal={true} />
        <VideoPreview />
      </React.Fragment>
    );
  }
}

export default Watch;
