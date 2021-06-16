import FeedBackSection from "./components/Sections/FeedBackSection";
import { GlobalStyle } from "./styles/global.js";
import InitialSection from "./components/Sections/InitialSection";
import React from "react";

function App() {

  return (
    <React.Fragment>
      <GlobalStyle />
      <InitialSection />
      <FeedBackSection />
    </React.Fragment>
  );
}

export default App;
