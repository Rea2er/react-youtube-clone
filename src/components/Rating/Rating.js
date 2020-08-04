import React from "react";
import { Icon } from "semantic-ui-react";
import "./Rating.scss";

const Rating = (props) => {
  return (
    <div className="rating">
      <div className="thumbs-up">
        <Icon name="thumbs outline up" />
        <span>{props.likeCount}</span>
      </div>
      <div className="thumbs-down">
        <Icon name="thumbs outline down" />
        <span>{props.dislikeCount}</span>
      </div>
    </div>
  );
};

export default Rating;
