import { connect } from 'react-redux';
import FooterComp from '../components/footer-comp';

const mapStateToProps = state => (
  {
    language: state.changeLanguage.language,
  });

const FooterContainer = connect(
  mapStateToProps,
  null,
)(FooterComp);

export default FooterContainer;