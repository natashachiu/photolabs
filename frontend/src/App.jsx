import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';


const App = () => {
  const initialState = { show: false, photo: null };
  const [modal, setModal] = useState(initialState);

  const showModal = (photo) => {
    setModal({ show: true, photo });
  };
  const hideModal = () => setModal({ ...modal, show: false });

  const [favPhotos, setFavPhotos] = useState([]);
  const toggleFavPhoto = (id) => {
    if (favPhotos.includes(id)) {
      const updatedFavPhotos = favPhotos.filter(photoId => photoId !== id);
      setFavPhotos(updatedFavPhotos);
    } else {
      setFavPhotos([...favPhotos, id]);
    }
    console.log(favPhotos);
  };

  return (
    <div className="App">
      <HomeRoute showModal={showModal} toggleFavPhoto={toggleFavPhoto} favPhotos={favPhotos} />
      <PhotoDetailsModal {...modal} hideModal={hideModal} toggleFavPhoto={toggleFavPhoto} favPhotos={favPhotos} />
    </div>
  );
};

export default App;
