import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import photos from 'mocks/photos';
import topics from "mocks/topics";
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ showModal }) => {
  const [favPhotos, setFavPhotos] = useState([]);
  const addFavPhoto = (id) => setFavPhotos([...favPhotos, id]);



  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotos={favPhotos.length} />
      <PhotoList photos={photos} addFavPhoto={addFavPhoto} showModal={showModal} />
    </div>
  );
};

export default HomeRoute;
