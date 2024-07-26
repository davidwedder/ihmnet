import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import EstilosGlobais from './componentes/EstilosGlobais'
import Contato from './paginas/Contato'
import Admin from './paginas/Admin'
import Menu from './componentes/Menu'
import Benvindo from "./paginas/Benvindo"
import Medidas from './paginas/Medidas'
import Logout from './paginas/Logout'
import DetalhesDevice from './componentes/DetalhesDevice'
import {LoginForm, SignupForm} from './componentes/autentica/Autenticacao'
import Produtos from './componentes/Produtos'
import Footer from './componentes/Footer'




function App( ) { 
  return ( 
  < Router >
    <EstilosGlobais />
    <Menu />
    <Footer/>
    < Routes > 
      < Route path = "/" element = { < Benvindo /> } />      
      < Route path = "/produtos" element = { < Produtos />} />
      < Route path = "/medidas" element = { < Medidas /> } /> 
      < Route path = "/medidas/:id" element = { < DetalhesDevice /> } /> 
      < Route path = "/contato" element = { < Contato /> } /> 
      < Route path = "/admin" element = { < Admin /> } /> 
      < Route path = "/cadastro" element = { < SignupForm />} />
      < Route path = "/login" element = { < LoginForm />} />
      < Route path = "/logout" element = { < Logout />} />
     </ Routes > 
  </ Router > ); } 

export default App
