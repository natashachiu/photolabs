import React from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ id, location, urls, user: { name, profile }, toggleFavPhoto, favPhotos, onClick }) => {

  return (
    <li className="photo-list__item">
      <PhotoFavButton onClick={toggleFavPhoto}
        fill={favPhotos.includes(id)} />
      <img className="photo-list__image" src={urls.regular} alt="img" onClick={onClick} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt="profile img" />

        <div>
          <p className="photo-list__user-info">{name}</p>
          <p className="photo-list__user-info photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>


    </li>
  );
};

export default PhotoListItem;
