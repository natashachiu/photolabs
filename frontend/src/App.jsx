import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';


const App = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => setModal(true);
  const hideModal = () => setModal(false);

  return (
    <div className="App">
      <HomeRoute showModal={showModal} />
      {/* <button type='button' onClick={showModal}>open</button> */}
      <PhotoDetailsModal modal={modal} hideModal={hideModal} />
    </div>
  );
};

export default App;
