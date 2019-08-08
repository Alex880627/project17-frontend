import { connect } from 'react-redux';
import PrivacyPolicyComp from '../components/privacy-policy-comp';

const mapStateToProps = state => (
  {
    language: state.changeLanguage.language,
  });

const PrivacyPolicyContainer = connect(
  mapStateToProps,
  null,
)(PrivacyPolicyComp);

export default PrivacyPolicyContainer;