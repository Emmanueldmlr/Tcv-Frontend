import { combineReducers } from 'redux';

import eventReducer from './eventReducer';

import categoryReducer from './categoryReducer';


const rootReducer = combineReducers({

  event: eventReducer,

  category: categoryReducer,
  
});

export default rootReducer;