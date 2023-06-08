import { legacy_createStore as createStore  } from 'redux';
import {  combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducerWeekly from './components/home/reduxWeekly/reducer';
import reducer from './components/home/posts/reduxPost/reducer';

const middleware = [logger];
// Combine reducers
const rootReducer = combineReducers({
  daysreducer: reducerWeekly,
  posts: reducer
});

// Create the Redux store
const store = createStore(rootReducer,applyMiddleware(...middleware));

export default store;
