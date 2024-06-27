import React from 'react'
import Userfront, { LogoutButton } from "@userfront/toolkit/react";
import Styled from 'styled-components'
import {Link} from 'react-router-dom'
import logoIHMNET from '../assets/ihmnet2.png';


Userfront.init("6nzvj8vn")

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
    .BT{
        margin-top:-20px;
        height: 30px;
        position: relative;
        
        

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
    h5{
        color: yellow;
    }

    h1{
    color:#F93D02; 
    padding-right: 25rem;
      
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
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/cadastro'>Cadastro</Link></li>                
                <li><Link to='/Produtos'>Produtos</Link></li>
                <li><Link to='/Contatos'>Contato</Link></li>
            </>
            )}   
            {Userfront.accessToken() && (
            <>
                <li><Link to='/Medidas'>Medidas</Link></li>
                <li><Link to='/Admin'>Administração</Link></li>
                <div className='BT'>
                <li><Link to='/logout'><LogoutButton/></Link></li>
                </div>
                
            </>
            )}
           </ul>
        </StyledNav>
    )
}
export default Menu

