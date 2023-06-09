import { legacy_createStore as createStore  } from 'redux';
import {  combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducerWeekly from './components/home/reduxWeekly/reducer';
import reducer from './components/home/posts/reduxPost/reducer';

const middleware = [logger];

const rootReducer = combineReducers({
  daysreducer: reducerWeekly,
  posts: reducer
});


const store = createStore(rootReducer,applyMiddleware(...middleware));

export default store;
