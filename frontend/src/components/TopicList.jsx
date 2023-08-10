import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const TopicList = () => {
  const topicsArr = topics.map(topic =>
    <TopicListItem topic={topic.title} key={topic.id} />);

  return (
    <div className="top-nav-bar__topic-list">
      {topicsArr}
    </div>
  );
};

export default TopicList;
