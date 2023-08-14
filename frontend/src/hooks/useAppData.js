import { useReducer, useEffect } from 'react';

const ACTIONS = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
  TOGGLE_FAV_PHOTO: 'TOGGLE_FAV_PHOTO',
  // ON_LOAD_TOPIC: 'ON_LOAD_TOPIC',
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
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  const onLoadTopic = (topicId) => {
    fetch(`api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch(error => console.log('Error:', error));
  };
  // useEffect((topicId) => {
  //   fetch(`api/topics/photos/${topicId}`)
  //     .then(res => res.json())
  //     .then(data => dispatch({ type: ACTIONS.LOAD_TOPIC, payload: data }));
  // },[]);


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