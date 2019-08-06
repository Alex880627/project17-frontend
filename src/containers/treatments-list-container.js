import { connect } from 'react-redux';
import TreatmentsListComp from '../components/treatments-list-comp';

const mapStateToProps = state => (
  {
    language: state.changeLanguage.language,
  });

const TreatmentsListContainer = connect(
  mapStateToProps,
  null,
)(TreatmentsListComp);

export default TreatmentsListContainer;