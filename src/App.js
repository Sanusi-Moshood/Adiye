
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'
// import Team from './components/Team'


const App = () => {


  return (
    <div className=''>
      <section id='home'>
        <Navbar />
        <Hero />
      </section>
      <section id='about'>
      <About />
      </section>
      {/* <section id='team'>
      <Team />
      </section> */}

    </div>
  );
}

export default App;
