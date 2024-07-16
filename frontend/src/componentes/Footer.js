import React from "react";
import styled from "styled-components";
import logoBrasil from '../assets/brasil.png';

const StyledFooter = styled.div`
  width: 100%;
  height: 40px;
  background: #050A89;
  border-top: 2px solid #EE6B26;

  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  span{
    color: #FFF;
  }
  img{
    width:50px;
    display: flex;
    justify-content:right;
    
  }

`;

const Footer = ()=>{
    return(
        <StyledFooter>
           <img src={logoBrasil} alt="logoBrasil"/>
           <span>Todos os direitos reservados!</span>           
        </StyledFooter>
    )
}


export default Footer;