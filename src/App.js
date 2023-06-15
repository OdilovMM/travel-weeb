//Importing All components to app js

import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tours from "./components/Tours";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
