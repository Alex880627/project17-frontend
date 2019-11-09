import React from "react";
import LandinPageContainer from "./containers/landing-page-container";
import GroupSessionsContainer from "./containers/group-sessions-container";
import TherapistListContainer from "./containers/therapist-list-container";
import PricesContainer from "./containers/prices-container";
import TreatmentsListContainer from "./containers/treatments-list-container";
import ContactsContainer from "./containers/contacts-container";
import ScrollProgress from "./components/scroll-progress-bar"
import FooterContainer from "./containers/footer-container";
import SideDrawer from "./containers/side-drawer-cont";

const App = () => {
  return (
    <>
      <ScrollProgress />
      <LandinPageContainer />
      <SideDrawer />
      <TreatmentsListContainer />
      <TherapistListContainer />
      <PricesContainer />
      <GroupSessionsContainer />
      <ContactsContainer />
      <FooterContainer />
    </>
  );
};

export default App;
