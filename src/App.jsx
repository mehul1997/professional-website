import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar/>
        <Hero/>
      </section>

      <section id="Services">Services</section>
      <section id="Portfolio">Portfolios</section>
    </div>
  );
};

export default App;