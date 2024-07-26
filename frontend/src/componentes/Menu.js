import React from 'react'
import Userfront from '@userfront/react'
import { LogoutButton } from './autentica/Autenticacao';
import Styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import logoIHMNET from '../assets/ihmnet2.png'


Userfront.init("qbjqg94n")

const StyledNav = Styled.nav`
    background: #050A89;
    color: white;
    min-height: 10vh;
    height: 70px;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    position: sticky;
    border-bottom: 2px solid #EE6B26;
    top: 0;
    z-index: 10;

    ul{
        margin-top: 30px;
        display: flex;
        list-style: none;
    }
    li{
        padding-left: 3rem;
    }
    a{
        color: #95a5e6 ;
        text-decoration: none;
        &:hover{
            background-color: #050A89;
            color: #F93D02;
        }
    }

    
    h1{
    color:#F93D02; 
    padding-right: 25rem;
      
   }
    h5{
        color: yellow;
    }
    

    img{
        width: 150px;
        height: 40px;
        
    }
`;

const Menu = ()=>{
    return(
        <StyledNav>
              <img src={logoIHMNET} alt='logoIHMNET'/>
            
            <ul>
               
                {!Userfront.accessToken() && (
                        <>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/Produtos'>Produtos</NavLink></li>
                            <li><NavLink to='/Contato'>Contato</NavLink></li>
                            <li><NavLink to='/login'>Login</NavLink></li>
                            <li><NavLink to='/cadastro'>Cadastro</NavLink></li>
                        </>
                )}
                {Userfront.accessToken() && (
                        <>
                            <li><NavLink to='/Medidas'>Medidas</NavLink></li>
                            <li><NavLink to='/Admin'>Administração</NavLink></li>
                            <li><NavLink to='/logout'><LogoutButton/></NavLink></li>
                         
                        </>
                )}
                
            </ul>
        </StyledNav>
    )
}
export default Menu

