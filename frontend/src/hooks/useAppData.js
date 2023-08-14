import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
  TOGGLE_FAV_PHOTO: 'TOGGLE_FAV_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
};


const reducer = (state, action) => {
  if (action.type === ACTIONS.SHOW_MODAL) {
    return { ...state, modal: { show: true, photo: action.payload } };
  }
  if (action.type === ACTIONS.HIDE_MODAL) {
    return { ...state, modal: { ...state.modal, show: false } };
  }
  if (action.type === ACTIONS.TOGGLE_FAV_PHOTO) {
    if (state.favPhotos.includes(action.payload)) {
      const updatedFavPhotos = state.favPhotos.filter(
        (photoId) => photoId !== action.payload);
      return { ...state, favPhotos: updatedFavPhotos };

    } else {
      return { ...state, favPhotos: [...state.favPhotos, action.payload] };
    }
  }
  if (action.type === ACTIONS.SET_PHOTO_DATA) {
    return { ...state, photoData: action.payload };
  }
  if (action.type === ACTIONS.SET_TOPIC_DATA) {
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

const useAppData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const photoPromise = axios.get('/api/photos');
    const topicPromise = axios.get('/api/topics');

    const promises = [photoPromise, topicPromise];

    Promise.all(promises)
      .then(resArr => {
        const photos = resArr[0].data;
        const topics = resArr[1].data;

        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topics });
      })
      .catch(error => console.log('Error:', error));
  }, []);


  const onLoadTopic = (topicId) => {
    axios.get(`api/topics/photos/${topicId}`)
      .then(res => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data }))
      .catch(error => console.log('Error:', error));
  };


  const showModal = (photo) => {
    dispatch({ type: ACTIONS.SHOW_MODAL, payload: photo });
  };
  const hideModal = () => {
    dispatch({ type: ACTIONS.HIDE_MODAL });
  };
  const toggleFavPhoto = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_FAV_PHOTO, payload: id });
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
    onLoadTopic
  };
};

export default useAppData;