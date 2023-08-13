import React from 'react';
import './App.scss';
import photos from 'mocks/photos';
import topics from "mocks/topics";
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useAppData from './hooks/useAppData';

const App = () => {
  const {
    state: { modal, favPhotos },
    showModal,
    hideModal,
    toggleFavPhoto
  } = useAppData();

  return (
    <div className="App">
      <HomeRoute showModal={showModal} toggleFavPhoto={toggleFavPhoto} favPhotos={favPhotos} topics={topics} photos={photos} />
      <PhotoDetailsModal {...modal} hideModal={hideModal} toggleFavPhoto={toggleFavPhoto} favPhotos={favPhotos} />
    </div>
  );
};

export default App;
