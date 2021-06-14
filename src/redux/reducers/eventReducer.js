import * as types from '../actions/actionTypes';

const initialState = {

  events: null,

  latestEvents: null,

  loading: false,

  msg: null,

  singleEvent: null

};

const eventReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.TOGGLE_EVENT_LOADING:

      return {

        ...state,

        loading: !state.loading

      };

    case types.SAVE_LATEST_EVENTS:

      return {

        ...state,

        latestEvents: action.payload

      };

    case types.SAVE_SINGLE_EVENTS:

      return {

        ...state,

        singleEvent: action.payload

      };

    case types.SAVE_EVENT_MSG:

      return {

        ...state,

        msg: action.payload

      };

    case types.SAVE_PAGINATED_EVENTS:

      return {

        ...state,

        events: action.payload

      };
  
    default:

      return state;

  }

};

export default eventReducer;