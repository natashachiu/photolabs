import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ showModal, toggleFavPhoto, favPhotos, onLoadTopic, photos, topics, searchPhotos, isFav }) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotos={favPhotos.length} onLoadTopic={onLoadTopic} searchPhotos={searchPhotos} />
      <PhotoList photos={photos} toggleFavPhoto={toggleFavPhoto} isFav={isFav} showModal={showModal} />
    </div>
  );
};

export default HomeRoute;
