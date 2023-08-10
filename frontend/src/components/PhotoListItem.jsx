import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {


  return (
    <article className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={props.imageSource} alt="" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} alt="" />

        <div>
          <div className="photo-list__user-info">{props.username}</div>
          <div className="photo-list__user-info photo-list__user-location">{props.location.city}, {props.location.country}</div>
        </div>
      </div>


    </article>
  );
};

export default PhotoListItem;
