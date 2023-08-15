import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ show, photo, hideModal, toggleFavPhoto, isFav }) => {

  const displayModal = show ? "" : "display-none";

  return (
    <div className={`photo-details-modal ${displayModal}`}>
      <button className={`photo-details-modal__close-button ${displayModal}`} onClick={hideModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__image-container'>
        <PhotoFavButton onClick={() => toggleFavPhoto(photo.id)}
          fill={photo && isFav(photo.id)} />
        {photo && <img className="photo-details-modal__image" src={photo.urls.full} alt="larger version photo" />}
      </div>

      <header className="photo-details-modal__header">Similar Photos</header>
      {photo && <PhotoList className="photo-details-modal__images"
        photos={Object.values(photo.similar_photos)}
        toggleFavPhoto={toggleFavPhoto} isFav={isFav}
        showModal={() => { }} />}

    </div >
  );
};

export default PhotoDetailsModal;
