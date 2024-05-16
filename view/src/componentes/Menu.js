import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoIHMNET from '../assets/ihmnet.png';



const StyledMenu = styled.div`
   background:#000000;     
   color:white;
   min-height: 10vh;
   display: flex;
   margin: auto;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 10rem;
   

   h1{
    color:#F93D02;    
   }

   ul{   
    
    display: flex;
    list-style: none;
    text-decoration:none;
    
   }

   li{  
   
    list-style: none;
    padding-left: 2rem;
    font-weight: bold;
    font-size: 1rem;
    
   }

   a{
    color:#F93D02;
    text-decoration: none;
   }

   li{
     color:white;
     text-decoration: none;
     &:hover{
        color:white;
        background-color:#000000;        
    }
   }
Link{
    text-decoration: none;
    color: white;
}

img{
    width: 40px;
    justify-content: right;
    display: flex-end;
    position: relative;
    margin-right: 930px;
    margin-top: 10px;
    
}


`;

const Menu = ()=>{
    return(
        <StyledMenu>
            <h1>IHM-NET</h1>
            <img src={logoIHMNET} alt="logoIHMNET"/>            
            <ul>                
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/medidas'>Medidas</Link></li>
                <li><Link to='/admin'>Administração</Link></li>
                <li><Link to='/mensagens'>Mensagens</Link></li>
              
            </ul>
        </StyledMenu>
    )
}

export default Menu;
