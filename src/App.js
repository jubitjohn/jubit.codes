import "./App.css";
import About from "./components/about/About";
import Creations from "./components/creations/Creations";
import Experience from "./components/experience/Experience.jsx";
import NavBar from "./components/NabBar/NavBar";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <div>
      <Welcome />
      <About />
      <Experience />
      <Creations />
      <NavBar />
    </div>
  );
}

export default App;
