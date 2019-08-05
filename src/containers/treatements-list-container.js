import { connect } from 'react-redux';
import TreatementsListComp from '../components/therapist-list-comp';

const mapStateToProps = state => (
  {
    language: state.changeLanguage.language,
  });

const TreatementsListContainer = connect(
  mapStateToProps,
  null,
)(TreatementsListComp);

export default TreatementsListContainer;