import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EstilosGlobais from './componentes/EstilosGlobais';
import BenVindo from './pages/Benvindo';
import Medidas from './pages/Medidas';
import Admin from './pages/Admin';
import Mensagens from './pages/Mensagens';
import Menu from './componentes/Menu';
import Footer from './componentes/Footer';



function App(){
  return(
  <Router>
      <EstilosGlobais/>
      <Menu/>
      <Footer/>
    <Routes>
       <Route path='/' element = {<BenVindo/>}/>
       <Route path='/medidas' element = {<Medidas/>}/>
       <Route path='/admin' element = {<Admin/>}/>
       <Route path='/mensagens' element = {<Mensagens/>}/>

    </Routes>
  </Router>
  )
}

export default App;
