import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ onLoadTopic, topics }) => {
  const topicsArr = topics.map(topic =>
    <TopicListItem topic={topic.title} key={topic.id}
      onClick={() => onLoadTopic(topic.id)} />);

  return (
    <div className="top-nav-bar__topic-list">
      {topicsArr}
    </div>
  );
};

export default TopicList;
