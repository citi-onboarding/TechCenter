import InitialScetion from "./components/Sections/InitialSection";
import { GlobalStyle } from "./styles/global.js";
import AboutUs from "./components/Sections/AboutUs";
import Event from "./components/Sections/Event";

function App() {
  return (
    <>
      <GlobalStyle/>
      <InitialScetion/>
      <AboutUs/>
      <Event/>
    </>
  );
}

export default App;
