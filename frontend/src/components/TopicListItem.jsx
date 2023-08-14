import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ onClick, topic }) => {
  return (
    <div className="topic-list__item" onClick={onClick}>
      <span>{topic}</span>
    </div>
  );
};

export default TopicListItem;
