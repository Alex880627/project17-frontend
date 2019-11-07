import { connect } from 'react-redux';
import ContactsComp from '../components/contacts-comp';
import {
  openModalAction,
  closeModalAction
} from "../actions/toogle-modal-action";

const mapDispatchToProps = dispatch => ({
  openModal: () => {
    dispatch(openModalAction());
  },
});

const mapStateToProps = state => (
  {
    language: state.changeLanguage.language,
  });

const ContactsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsComp);

export default ContactsContainer;