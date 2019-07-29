import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import Galery from "./components/galery-comp";
import LandinPage from "./components/landing-page";
import GroupSessionsContainer from "./containers/group-sessions-container";
import TherapistListContainer from "./containers/therapist-list-container";
import configureStore from "./store/configure-store";
import PricesContainer from "./containers/prices-container";
import * as serviceWorker from "./serviceWorker";
import ContactsContainer from "./containers/contacts-container";
import FooterContainer from "./containers/footer-container";
import "./assets/stylesheets/main.css";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <LandinPage />
    <Galery />
    <TherapistListContainer />
    <PricesContainer />
    <GroupSessionsContainer />
    <ContactsContainer />
    <FooterContainer />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
