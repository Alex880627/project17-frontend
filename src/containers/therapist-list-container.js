import { connect } from "react-redux";
import TherapistListComp from "../components/therapist-list-comp";
import { openModalAction } from "../actions/toogle-modal-action";

const mapStateToProps = state => ({
  language: state.changeLanguage.language
});

const mapDispatchToProps = dispatch => ({
  openModal: () => {
    dispatch(openModalAction());
  }
});

const TherapistListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TherapistListComp);

export default TherapistListContainer;
