import * as types from '../actions/actionTypes';

const initialState = {

  categories: null,

  loading: false,

  msg: null

};

const categoryReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.TOGGLE_CATEGORY_LOADING:

      return {

        ...state,

        loading: !state.loading

      };

    case types.SAVE_CATEGORIES:

      return {

        ...state,

        categories: action.payload

      };

    case types.SAVE_CATEGORIES_MSG:

      return {

        ...state,

        msg: action.payload

      };
  
    default:

      return state;

  }

};

export default categoryReducer;