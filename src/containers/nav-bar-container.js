import { connect } from "react-redux";
import NavBarComp from "../components/nav-bar-comp";
import {
  changeLangToENAction,
  changeLangToHUAction
} from "../actions/change-language-action";
import {
  openSideBarAction,
  closeSideBarAction
} from "../actions/toogle-side-bar-action";
import {
  openModalAction,
  closeModalAction
} from "../actions/toogle-modal-action";

import {
  setBlurAction,
  unsetBlurAction
} from "../actions/set-blur-action";

const mapDispatchToProps = dispatch => ({
  changeLanguageToHU: () => {
    dispatch(changeLangToHUAction());
  },
  changeLanguageToEN: () => {
    dispatch(changeLangToENAction());
  },
  openSideBar: () => {
    dispatch(openSideBarAction());
  },
  closeSideBar: () => {
    dispatch(closeSideBarAction());
  },
  openModal: () => {
    dispatch(openModalAction());
  },
  closeModal: () => {
    dispatch(closeModalAction());
  },
  setBlur: () => {
    dispatch(setBlurAction());
  },
  unsetBlur: () => {
    dispatch(unsetBlurAction());
  }
});

const mapStateToProps = state => ({
  language: state.changeLanguage.language,
  sideBar: state.toogleSideBar.sideBar,
  modalOpen: state.toogleModal.modalOpen,
  blur: state.blurReducer.blur
});

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarComp);

export default NavBarContainer;
