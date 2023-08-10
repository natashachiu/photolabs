import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {

  return (
    <li className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={props.imageSource} alt="" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} alt="" />

        <div>
          <p className="photo-list__user-info">{props.username}</p>
          <p className="photo-list__user-info photo-list__user-location">{props.location.city}, {props.location.country}</p>
        </div>
      </div>


    </li>
  );
};

export default PhotoListItem;
