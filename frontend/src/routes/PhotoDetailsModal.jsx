import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ show, photo, hideModal }) => {

  const displayModal = show ? "" : "display-none";


  return (
    <div className={`photo-details-modal ${displayModal}`}>
      <button className={`photo-details-modal__close-button ${displayModal}`} onClick={hideModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <PhotoFavButton />
      {photo && <img className="photo-details-modal__image" src={photo.urls.full} alt="larger version photo" />}
      <div>
        <header className="photo-details-modal__header">Similar Photos</header>
        <ul>
          {photo && <PhotoList className="photo-details-modal__images" photos={Object.values(photo.similarPhotos)} showModal={() => { }} />}
        </ul>
      </div>
    </div >
  );
};

export default PhotoDetailsModal;
