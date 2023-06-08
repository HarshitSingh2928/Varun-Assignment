import { legacy_createStore as createStore  } from 'redux';
import {  combineReducers } from 'redux';
import reducerWeekly from './components/home/reduxWeekly/reducer';
import reducer from './components/home/posts/reduxPost/reducer';

// Combine reducers
const rootReducer = combineReducers({
  daysreducer: reducerWeekly,
  posts: reducer
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
