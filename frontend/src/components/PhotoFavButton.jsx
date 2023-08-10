import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const [fill, setFill] = useState(false);
  const handleClick = () => setFill(fill ? false : true);


  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={fill} displayAlert={false} />
      </div>
    </div>
  );
};

export default PhotoFavButton;