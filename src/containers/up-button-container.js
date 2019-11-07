import { connect } from 'react-redux';
import UpNavButton from '../components/up-nav-button';

const mapStateToProps = state => (
  {
    language: state.changeLanguage.language,
  });

const UpNavButtonContainer = connect(
  mapStateToProps,
  null,
)(UpNavButton);

export default UpNavButtonContainer;