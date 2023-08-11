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

  return (
    <div className="App">
      <HomeRoute showModal={showModal} />
      <PhotoDetailsModal {...modal} hideModal={hideModal} />
    </div>
  );
};

export default App;
