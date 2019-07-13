import { connect } from 'react-redux';
import PricesComp from '../components/prices-comp';

const mapStateToProps = state => (
  {
    language: state.changeLanguage.language,
  });

const PricesContainer = connect(
  mapStateToProps,
  null,
)(PricesComp);

export default PricesContainer;