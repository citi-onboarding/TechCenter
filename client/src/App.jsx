import InitialScetion from "./components/Sections/InitialSection";
import { GlobalStyle } from "./styles/global.js";
import AboutUs from "./components/Sections/AboutUs";
import Event from "./components/Sections/Event";
import Partnerships from "./components/Sections/Partnership";

function App() {
  return (
    <>
      <GlobalStyle/>
      <InitialScetion/>
      <AboutUs/>
      <Event/>
      <Partnerships/>
    </>
  );
}

export default App;
