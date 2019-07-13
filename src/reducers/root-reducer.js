import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import changeLanguage from './change-language-reducer'

const rootReducer = combineReducers({
  changeLanguage,
  routing: routerReducer,
});

export default rootReducer;
