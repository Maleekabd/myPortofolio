import "./App.css";
import Landingpage from "./components/landingpage";
import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
// import About from "./components/About";
// import { AboutMeSpec } from "./components/About";
import Frontend from "./components/Frontend";
import ComputerNetwork from "./components/ComputerNetwork";
import ApaItuJaringanKomputer from "./contents/computer-network/ApaItuJaringanKomputer";
import NetworkLayer from "./contents/computer-network/osi-layer-tcp-ip";
import Stats from "./components/stats";
import BackButton from "./elements/BackButton";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main>
                <Landingpage />
                {/* <About /> */}
                <Timeline />
                {/* <Stats /> */}
                <Card />  
              </main>
              <footer>
                <Contact />
                <Footer />
              </footer>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <main>
                {/* <AboutMeSpec /> */}
              </main>
              <footer>
                <Footer />
              </footer>
            </>
          }
        />
        <Route
          path="computer-network-projects"
          element={
            <>
              <main>
                <ComputerNetwork />
              </main>
              <footer>
                <Footer />
              </footer>
            </>
          }
        />
        <Route
          path="/computer-network-projects/apa-itu-jaringan-komputer"
          element={
            <>
              <main>
                <BackButton />
                <ApaItuJaringanKomputer />
              </main>
              <footer>
                <Footer />
              </footer>
            </>
          }
        />
        <Route
          path="/computer-network-projects/osi-layer-dan-tcpip-layer"
          element={
            <>
              <main>
                <BackButton />
                <NetworkLayer />
              </main>
              <footer>
                <Footer />
              </footer>
            </>
          }
        />

        <Route
          path="/frontend-react-projects"
          element={
            <>
              <main>
                <Frontend />
              </main>
              <footer>
                <Footer />
              </footer>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
