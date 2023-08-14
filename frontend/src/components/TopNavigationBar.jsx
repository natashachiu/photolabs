import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, favPhotos, onLoadTopic }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__container">
        <TopicList topics={topics} onLoadTopic={onLoadTopic} />
        <FavBadge isFavPhotoExist={favPhotos} fill />
      </div>
    </div>
  );
};

export default TopNavigation;