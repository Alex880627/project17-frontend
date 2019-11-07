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
  }
});

const mapStateToProps = state => ({
  language: state.changeLanguage.language,
  sideBar: state.toogleSideBar.sideBar,
  modalOpen: state.toogleModal.modalOpen
});

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarComp);

export default NavBarContainer;
