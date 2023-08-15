import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
  TOGGLE_FAV_PHOTO: 'TOGGLE_FAV_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
};

const useAppData = () => {

  const { SHOW_MODAL, HIDE_MODAL, TOGGLE_FAV_PHOTO, SET_PHOTO_DATA, SET_TOPIC_DATA } = ACTIONS;

  const reducer = (state, action) => {
    if (action.type === SHOW_MODAL) {
      return { ...state, modal: { show: true, photo: action.payload } };
    }
    if (action.type === HIDE_MODAL) {
      return { ...state, modal: { ...state.modal, show: false } };
    }
    if (action.type === TOGGLE_FAV_PHOTO) {
      if (state.favPhotos.includes(action.payload)) {
        const updatedFavPhotos = state.favPhotos.filter(
          (photoId) => photoId !== action.payload);
        return { ...state, favPhotos: updatedFavPhotos };

      } else {
        return { ...state, favPhotos: [...state.favPhotos, action.payload] };
      }
    }
    if (action.type === SET_PHOTO_DATA) {
      return { ...state, photoData: action.payload };
    }
    if (action.type === SET_TOPIC_DATA) {
      return { ...state, topicData: action.payload };
    }

    return state;
  };

  const initialState = {
    modal: { show: false, photo: null },
    favPhotos: [],
    photoData: [],
    topicData: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const photoPromise = axios.get('/api/photos');
    const topicPromise = axios.get('/api/topics');

    const promises = [photoPromise, topicPromise];

    Promise.all(promises)
      .then(resArr => {
        const photos = resArr[0].data;
        const topics = resArr[1].data;

        dispatch({ type: SET_PHOTO_DATA, payload: photos });
        dispatch({ type: SET_TOPIC_DATA, payload: topics });
      })
      .catch(error => console.log('Error:', error));
  }, []);


  const onLoadTopic = (topicId) => {
    axios.get(`api/topics/photos/${topicId}`)
      .then(res => dispatch({ type: SET_PHOTO_DATA, payload: res.data }))
      .catch(error => console.log('Error:', error));
  };

  const searchPhotos = (searchTerm) => {
    axios.get(`api/search/${searchTerm}`)
      .then(res => dispatch({ type: SET_PHOTO_DATA, payload: res.data }))
      .catch(error => console.log('Error:', error));
  };

  const showModal = (photo) => {
    dispatch({ type: SHOW_MODAL, payload: photo });
  };
  const hideModal = () => {
    dispatch({ type: HIDE_MODAL });
  };
  const toggleFavPhoto = (id) => {
    dispatch({ type: TOGGLE_FAV_PHOTO, payload: id });
  };

  const isFav = (id) => {
    return state.favPhotos.includes(id);
  };

  return {
    state: {
      modal: state.modal,
      favPhotos: state.favPhotos,
      photoData: state.photoData,
      topicData: state.topicData
    },
    showModal,
    hideModal,
    toggleFavPhoto,
    onLoadTopic,
    searchPhotos,
    isFav
  };
};

export default useAppData;