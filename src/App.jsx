import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Experiences from './components/experiences/Experiences';

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar/>
        <Hero/>
      </section>

      <section id="Experiences">
        <Experiences/>
      </section>

      <section id="Portfolio">Portfolios</section>
    </div>
  );
};

export default App;