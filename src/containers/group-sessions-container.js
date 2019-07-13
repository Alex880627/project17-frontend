import { connect } from 'react-redux';
import GroupSessionsComp from '../components/group-sessions-comp';

const mapStateToProps = state => (
  {
    language: state.changeLanguage.language,
  });

const GroupSessionsContainer = connect(
  mapStateToProps,
  null,
)(GroupSessionsComp);

export default GroupSessionsContainer;