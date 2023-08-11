import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ modal, hideModal }) => {

  const setClassName = modal ? "" : "display-none";

  return (
    <div className={`photo-details-modal ${setClassName}`}>
      <button className={`photo-details-modal__close-button ${setClassName}`} onClick={hideModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div >
  );
};

export default PhotoDetailsModal;
