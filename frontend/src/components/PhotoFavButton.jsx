import React from 'react';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

const PhotoFavButton = ({ onClick, fill }) => {

  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <div className="photo-list__fav-icon-svg">
        <FavBadge fill={fill} />
      </div>
    </div>
  );
};

export default PhotoFavButton;