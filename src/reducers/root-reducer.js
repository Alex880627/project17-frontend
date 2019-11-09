import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import changeLanguage from './change-language-reducer';
import toogleSideBar from './side-bar-reducer';
import toogleModal from "./modal-reducer";
import blurReducer from "./blur-reducer";

const rootReducer = combineReducers({
  changeLanguage,
  toogleSideBar,
  toogleModal,
  routing: routerReducer,
  blurReducer
});

export default rootReducer;
