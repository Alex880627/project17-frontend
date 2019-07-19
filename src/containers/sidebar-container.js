import { connect } from "react-redux";
import SideBarComp from "../components/side-bar-comp";
import {
  openSideBarAction,
  closeSideBarAction
} from "../actions/toogle-side-bar-action";

const mapStateToProps = state => ({
  language: state.changeLanguage.language,
  sideBar: state.toogleSideBar.sideBar
});
const mapDispatchToProps = dispatch => ({
  openSideBar: () => {
    dispatch(openSideBarAction());
  },
  closeSideBar: () => {
    dispatch(closeSideBarAction());
  }
});

const SideBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarComp);

export default SideBarContainer;
