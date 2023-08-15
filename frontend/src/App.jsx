import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useAppData from './hooks/useAppData';

const App = () => {
  const {
    state: { modal, favPhotos, photoData, topicData },
    showModal,
    hideModal,
    toggleFavPhoto,
    onLoadTopic,
    searchPhotos,
    isFav
  } = useAppData();


  return (
    <div className="App">
      <HomeRoute showModal={showModal} toggleFavPhoto={toggleFavPhoto} favPhotos={favPhotos} isFav={isFav} onLoadTopic={onLoadTopic} topics={topicData} photos={photoData} searchPhotos={searchPhotos} />
      <PhotoDetailsModal {...modal} hideModal={hideModal} toggleFavPhoto={toggleFavPhoto} isFav={isFav} />
    </div>
  );
};

export default App;
