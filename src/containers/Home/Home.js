import React, { Component } from "react";
import VideoGrid from "../../components/VideoGrid/VideoGrid";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <>
        <div className="home">
          <div className="responsive-video-grid-container">
            <VideoGrid title="Trending" />
            <VideoGrid title="Autos & Vehicles" hideDivider={true} />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
