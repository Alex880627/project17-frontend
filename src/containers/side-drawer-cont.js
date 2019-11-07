import { connect } from 'react-redux';
import SideDrawer from '../components/side-drawer-material-comp';
import {
  openSideBarAction,
  closeSideBarAction
} from "../actions/toogle-side-bar-action";
import {
  openModalAction,
  closeModalAction
} from "../actions/toogle-modal-action";

const mapStateToProps = state => ({
  language: state.changeLanguage.language,
  sideBar: state.toogleSideBar.sideBar,
  modalOpen: state.toogleModal.modalOpen
});
const mapDispatchToProps = dispatch => ({
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

const SideDrawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideDrawer);

export default SideDrawerContainer;