import { useState } from 'react';

const useAppData = () => {
  const initialState = { show: false, photo: null };
  const [modal, setModal] = useState(initialState || {});
  const [favPhotos, setFavPhotos] = useState([]);

  const showModal = (photo) => {
    setModal({ show: true, photo });
  };

  const hideModal = () => {
    setModal({ ...modal, show: false });
  };

  const toggleFavPhoto = (id) => {
    if (favPhotos.includes(id)) {
      const updatedFavPhotos = favPhotos.filter((photoId) => photoId !== id);
      setFavPhotos(updatedFavPhotos);
    } else {
      setFavPhotos([...favPhotos, id]);
    }
  };

  return {
    state: { modal, favPhotos },
    showModal,
    hideModal,
    toggleFavPhoto
  };
};

export default useAppData;