import "./App.css";
import Navbar from "./components/Navbar";
import PorqueYo from "./pages/sections/PorqueYo";
import Presentation from "./pages/sections/Presentation";
import Services from "./pages/sections/Services";

function App() {
  return (
    <>
      <Navbar />
      <Presentation />
      <Services />
      <PorqueYo />
    </>
  );
}

export default App;
