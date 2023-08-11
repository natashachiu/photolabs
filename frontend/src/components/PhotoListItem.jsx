import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ location, imageSource, username, profile, addFavPhoto, onClick }) => {

  const [fill, setFill] = useState(false);
  const addFav = () => {
    addFavPhoto();
    setFill(true);
  };

  return (
    <li className="photo-list__item">
      <PhotoFavButton onClick={addFav} fill={fill} />
      <img className="photo-list__image" src={imageSource} alt="" onClick={onClick} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt="" />

        <div>
          <p className="photo-list__user-info">{username}</p>
          <p className="photo-list__user-info photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>


    </li>
  );
};

export default PhotoListItem;
