import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, addFavPhoto }) => {

  const photosArr = photos.map(obj => {
    const { id, location, urls, user } = obj;

    return (
      <PhotoListItem key={id} location={location} imageSource={urls.full} username={user.name} profile={user.profile} addFavPhoto={() => addFavPhoto(id)} />);
  });

  return (
    <ul className="photo-list">
      {photosArr}
    </ul>
  );
};

export default PhotoList;
