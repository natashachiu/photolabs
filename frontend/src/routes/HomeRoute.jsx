import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import photos from 'mocks/photos';
import topics from "mocks/topics";
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ showModal, toggleFavPhoto, favPhotos }) => {



  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotos={favPhotos.length} />
      <PhotoList photos={photos} toggleFavPhoto={toggleFavPhoto} favPhotos={favPhotos} showModal={showModal} />
    </div>
  );
};

export default HomeRoute;
