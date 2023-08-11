import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, toggleFavPhoto, showModal }) => {

  const photosArr = photos.map((photo) => (
    <PhotoListItem
      key={photo.id} {...photo}
      toggleFavPhoto={() => toggleFavPhoto(photo.id)}
      onClick={() => showModal(photo)} />
  ));

  return (
    <ul className="photo-list">
      {photosArr}
    </ul>
  );
};

export default PhotoList;
