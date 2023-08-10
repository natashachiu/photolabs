import React, { useCallback, useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

const PhotoFavButton = (props) => {

  return (
    <div className="photo-list__fav-icon" onClick={props.onClick}>
      <div className="photo-list__fav-icon-svg">
        <FavBadge fill={props.fill} />
      </div>
    </div>
  );
};

export default PhotoFavButton;