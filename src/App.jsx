import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServerInfo from './components/ServerInfo';
import Gallery from './components/Gallery';
import Leaderboard from './components/Leaderboard';
import Shop from './components/Shop';
import ResourcePack from './components/ResourcePack';
import Testimonials from './components/Testimonials';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative bg-dark-primary overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div className="relative z-10 bg-dark-primary">
          <About />
          <ServerInfo />
          <Gallery />
          <Leaderboard />
          <Shop />
          <ResourcePack />
          <Testimonials />
          <JoinUs />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;