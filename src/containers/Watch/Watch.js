import React, { Component } from "react";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import Video from "../../components/Video/Video";
import VideoMetadata from "../../components/VideoMetadata/VideoMetadata";
import VideoInfoBox from "../../components/VideoInfoBox/VideoInfoBox";
import Comments from "../Comments/Comments";
import "./Watch.scss";

class Watch extends Component {
  render() {
    return (
      <div className="watch-grid">
        <Video id="-7fuHEEmEjs" />
        <VideoMetadata viewCount={1000} />
        <VideoInfoBox />
        <Comments />
        <RelatedVideos className="relatedVideos" />
      </div>
    );
  }
}

export default Watch;
