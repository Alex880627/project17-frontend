import React from "react";
import LandinPage from "./components/landing-page";
import GroupSessionsContainer from "./containers/group-sessions-container";
import TherapistListContainer from "./containers/therapist-list-container";
import PricesContainer from "./containers/prices-container";
import TreatmentsListContainer from "./containers/treatments-list-container";
import ContactsContainer from "./containers/contacts-container";
import FooterContainer from "./containers/footer-container";
import ResponsiveCarousel from "./components/responsive-carousel-comp"

const App = () => {
  return (
    <>
      <LandinPage />
      <ResponsiveCarousel/>
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
