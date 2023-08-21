import './App.css';
import ConnectUs from './components/ConnectUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Tophire from './components/Tophire';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contact />
      <Intro />
      <Services/>
      <Tophire />
      <ConnectUs />
      <Footer />
    </div>
  );
}

export default App;
