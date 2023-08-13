import { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'SHOW_MODAL') {
    return { ...state, modal: { show: true, photo: action.payload } };

  } else if (action.type === 'HIDE_MODAL') {
    return { ...state, modal: { ...state.modal, show: false } };

  } else if (action.type === 'TOGGLE_FAV_PHOTO') {
    if (state.favPhotos.includes(action.payload)) {
      const updatedFavPhotos = state.favPhotos.filter(
        (photoId) => photoId !== action.payload);
      return { ...state, favPhotos: updatedFavPhotos };

    } else {
      return { ...state, favPhotos: [...state.favPhotos, action.payload] };
    }
  }

  return state;
};


const useAppData = () => {
  const initialState = {
    modal: { show: false, photo: null },
    favPhotos: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const showModal = (photo) => {
    dispatch({ type: 'SHOW_MODAL', payload: photo });
  };
  const hideModal = () => {
    dispatch({ type: 'HIDE_MODAL' });
  };
  const toggleFavPhoto = (id) => {
    dispatch({ type: 'TOGGLE_FAV_PHOTO', payload: id });
  };

  return {
    state: { modal: state.modal, favPhotos: state.favPhotos },
    showModal,
    hideModal,
    toggleFavPhoto
  };
};

export default useAppData;