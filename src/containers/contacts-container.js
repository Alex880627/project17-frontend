import { connect } from 'react-redux';
import ContactsComp from '../components/contacts-comp';

const mapStateToProps = state => (
  {
    language: state.changeLanguage.language,
  });

const ContactsContainer = connect(
  mapStateToProps,
  null,
)(ContactsComp);

export default ContactsContainer;