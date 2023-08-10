import React, { useCallback, useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

const PhotoFavButton = () => {
  const [fill, setFill] = useState(false);
  const handleClick = () => setFill(fill ? false : true);


  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavBadge fill={fill} isFavPhotoExist={false} />
      </div>
    </div>
  );
};

export default PhotoFavButton;