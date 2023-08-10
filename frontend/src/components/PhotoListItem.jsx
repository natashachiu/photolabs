import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ location, imageSource, username, profile, addFavPhoto }) => {
  const [fill, setFill] = useState(null);
  const addFill = () => {
    addFavPhoto();
    return setFill(true);
  };

  return (
    <li className="photo-list__item">
      <PhotoFavButton onClick={addFill} fill={fill} />
      <img className="photo-list__image" src={imageSource} alt="" />
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
