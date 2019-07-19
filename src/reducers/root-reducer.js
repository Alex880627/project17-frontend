import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import changeLanguage from './change-language-reducer';
import toogleSideBar from './side-bar-reducer';

const rootReducer = combineReducers({
  changeLanguage,
  toogleSideBar,
  routing: routerReducer,
});

export default rootReducer;
