import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import photos from 'mocks/photos';
import topics from "mocks/topics";

const HomeRoute = () => {
  const [favPhotos, setFavPhotos] = useState([]);
  const addFavPhoto = (id) => setFavPhotos([...favPhotos, id]);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotos={!!favPhotos.length} />
      <PhotoList photos={photos} addFavPhoto={addFavPhoto} />
    </div>
  );
};

export default HomeRoute;
