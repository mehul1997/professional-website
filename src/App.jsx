import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Experiences from './components/experiences/Experiences';
import Resume from './components/resume/Resume';
import Github from './components/github/Github';
import Stacks from './components/stacks/Stacks';

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

      <section id="Tech Stacks">
        <Stacks />
      </section>

      <section id="Github and Contributions">
        <Github/>
      </section>

      <section id="Resume">
        <Resume/>
      </section>

      <section id="Recommendations">
      </section>


      <section id="Portfolio">Portfolios</section>
    </div>
  );
};

export default App;