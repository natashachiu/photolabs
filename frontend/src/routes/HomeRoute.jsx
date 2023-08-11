import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import photos from 'mocks/photos';
import topics from "mocks/topics";
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ showModal }) => {
  const [favPhotos, setFavPhotos] = useState([]);
  const toggleFavPhoto = (id) => {
    if (favPhotos.includes(id)) {
      const updatedFavPhotos = favPhotos.filter(photoId => photoId !== id);
      setFavPhotos(updatedFavPhotos);
    } else {
      setFavPhotos([...favPhotos, id]);
    }
  };


  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotos={favPhotos.length} />
      <PhotoList photos={photos} toggleFavPhoto={toggleFavPhoto} showModal={showModal} />
    </div>
  );
};

export default HomeRoute;
