import AboutUs from "./components/Sections/AboutUs";
import ArticleSection from "./components/Sections/ArticlesSection"
import Contact from "./components/Sections/Contact";
import Event from "./components/Sections/Event";
import FeedBackSection from "./components/Sections/FeedBackSection";
import Footer from "./components/Sections/Footer";
import { GlobalStyle } from "./styles/global.js";
import InitialSection from "./components/Sections/InitialSection";
import Partnerships from "./components/Sections/Partnership";
import React from "react"

function App() {

  return (
    <React.Fragment>
      <GlobalStyle />
      <InitialSection />
      <Event />
      <AboutUs />
      <FeedBackSection />
      <Partnerships />
      <ArticleSection />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
