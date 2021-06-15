import InitialScetion from "./components/Sections/InitialSection";
import { GlobalStyle } from "./styles/global.js";
import AboutUs from "./components/Sections/AboutUs";

function App() {
  return (
    <>
      <GlobalStyle/>
      <InitialScetion/>
      <AboutUs/>
    </>
  );
}

export default App;
