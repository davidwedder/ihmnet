import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import EstilosGlobais from './componentes/EstilosGlobais'
import Contatos from './paginas/Contatos'
import Admin from './paginas/Admin'
import Menu from './componentes/Menu'
import Benvindo from "./paginas/Benvindo"
import Produtos from './componentes/Produtos'
import Medidas from './paginas/Medidas'
import DetalhesDevice from './componentes/DetalhesDevice'
import autentica, { Login,Signup,Logout } from './componentes/autentica/Autenticacao'
import Footer from './componentes/Footer'


function App( ) { 
  return ( 
  < Router >
    <EstilosGlobais />
    <Footer/>
    <Menu />
    < Routes > 
      < Route path = "/" element = { < Benvindo /> } /> 
      < Route path = "/produtos" element = { < Produtos /> } />            
      < Route path = "/medidas" element = { < Medidas /> } />      
      < Route path = "/medidas/:id" element = { < DetalhesDevice /> } /> 
      < Route path = "/contatos" element = { < Contatos /> } /> 
      < Route path = "/admin" element = { < Admin /> } /> 
      < Route path = "/cadastro" element = { < Signup />} />
      < Route path = "/login" element = { < Login />} />
      < Route path = "/Logout" element = { < Logout />} />
      
    </ Routes > 
  </ Router > ); } 

export default App
