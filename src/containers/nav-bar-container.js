import { connect } from 'react-redux';
import NavBarComp from '../components/nav-bar-comp';
import { changeLangToENAction, changeLangToHUAction } from '../actions/change-language-action'

const mapDispatchToProps = dispatch => ({
  changeLanguageToHU: () => {
    dispatch(changeLangToHUAction());
  },
  changeLanguageToEN: () => {
    dispatch(changeLangToENAction());
  }
});

const mapStateToProps = state => (
  {
    language: state.changeLanguage.language,
  });

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBarComp);

export default NavBarContainer;