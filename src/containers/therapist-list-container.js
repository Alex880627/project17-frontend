import { connect } from 'react-redux';
import TherapistListComp from '../components/therapist-list-comp';

const mapStateToProps = state => (
  {
    language: state.changeLanguage.language,
  });

const TherapistListContainer = connect(
  mapStateToProps,
  null,
)(TherapistListComp);

export default TherapistListContainer;