import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ showModal, toggleFavPhoto, favPhotos, photos, topics }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotos={favPhotos.length} />
      <PhotoList photos={photos} toggleFavPhoto={toggleFavPhoto} favPhotos={favPhotos} showModal={showModal} />
    </div>
  );
};

export default HomeRoute;
