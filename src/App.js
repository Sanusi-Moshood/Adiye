import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import SharedRoute from './pages/SharedRoute'
import Aboutpage from './pages/Aboutpage'
import Home from './pages/Home'
import Career  from './pages/Career'
import Error from './pages/Error'
import Invest from './pages/Invest'
import { useLayoutEffect } from 'react'
const App = () => {

  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 

  return (
    <BrowserRouter>
    <Wrapper> 
    <Routes>
      <Route path='/' element={<SharedRoute />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<Aboutpage />}/>
        <Route path='career' element={<Career />}/>
        <Route path='invest' element={<Invest />}/>
      </Route>
      <Route path='*' element={<Error />}/>
    </Routes>
     </Wrapper>
    </BrowserRouter>
  )
}

export default App



















// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About'
// import Team from './components/Team'
// import Contact from './components/Contact'
// import Footer from './components/Footer'


// const App = () => {


//   return (
//     <div className=''>
//       <section id='home'>
//         <Navbar />
//         <Hero />
//       </section>
//       <section id='about'>
//       <About />
//       </section>
//       <section id='team'>
//       <Team />
//       </section>
//       <section id='contact'>
//       <Contact />
//       </section>
//       <section id='footer'>
//         <Footer />
//       </section>

//     </div>
//   );
// }

// export default App;
