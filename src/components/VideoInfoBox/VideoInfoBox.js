import React, { Component } from "react";
import { Image, Button } from "semantic-ui-react";
import "./VideoInfoBox.scss";

class VideoInfoBox extends Component {
  state = {
    collapsed: true,
  };

  onToggleCollapseButtonClick = () => {
    this.setState((prevState) => {
      return {
        collapsed: !prevState.collapsed,
      };
    });
  };

  render() {
    let descriptionTextClass = "collapsed";
    let buttonTitle = "Show More";
    if (!this.state.collapsed) {
      descriptionTextClass = "expanded";
      buttonTitle = "Show Less";
    }

    return (
      <div className="video-info-box">
        <Image
          className="channel-image"
          src="http://via.placeholder.com/48x48"
          circular
        />
        <div className="video-info">
          <div className="channel-name">Channel Name</div>
          <div className="video-publication-date">Thu 24, 2017</div>
        </div>
        <Button color="youtube">91.5K Subscribe</Button>
        <div className="video-description">
          <div className={descriptionTextClass}>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
            <p>Paragraph 3</p>
            <p>Paragraph 4</p>
            <p>Paragraph 5</p>
          </div>
          <Button compact onClick={this.onToggleCollapseButtonClick}>
            {buttonTitle}
          </Button>
        </div>
      </div>
    );
  }
}

export default VideoInfoBox;
