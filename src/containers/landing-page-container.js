import { connect } from 'react-redux';
import LandingPage from '../components/landing-page';

const mapStateToProps = state => (
  {
    language: state.changeLanguage.language,
  });

const LandingPageContainer = connect(
  mapStateToProps,
  null,
)(LandingPage);

export default LandingPageContainer;