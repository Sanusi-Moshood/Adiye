
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'

const App = () => {


  return (
    <div className=''>
      <section className='home'>
        <Navbar />
        <Hero />
      </section>
      <section id='about'>
      <About />
      </section>

    </div>
  );
}

export default App;
