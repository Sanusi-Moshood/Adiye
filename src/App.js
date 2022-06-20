
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'


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
      <section id='team'>
      <Team />
      </section>
      <section id='contact'>
      <Contact />
      </section>
      <section id='footer'>
        <Footer />
      </section>

    </div>
  );
}

export default App;
