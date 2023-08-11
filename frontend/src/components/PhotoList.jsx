import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, addFavPhoto, showModal }) => {

  const photosArr = photos.map(({ id, location, urls, user }) => (
    <PhotoListItem
      key={id} location={location} imageSource={urls.full}
      username={user.name} profile={user.profile}
      addFavPhoto={() => addFavPhoto(id)} onClick={showModal} />
  ));

  return (
    <ul className="photo-list">
      {photosArr}
    </ul>
  );
};

export default PhotoList;
