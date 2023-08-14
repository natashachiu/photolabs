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
    onLoadTopic
  } = useAppData();


  return (
    <div className="App">
      <HomeRoute showModal={showModal} toggleFavPhoto={toggleFavPhoto} favPhotos={favPhotos} onLoadTopic={onLoadTopic} topics={topicData} photos={photoData} />
      <PhotoDetailsModal {...modal} hideModal={hideModal} toggleFavPhoto={toggleFavPhoto} favPhotos={favPhotos} />
    </div>
  );
};

export default App;
