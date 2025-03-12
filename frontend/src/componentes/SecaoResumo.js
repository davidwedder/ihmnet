import React from 'react'
import styled from "styled-components";
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const SecaoResumo = ()=>{
    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../assets/iot.json')
      })
    }, [])


    return(
        <Inicio>
            <Descricao>              
            <h1>OT & IoT Segurança cibernética do ponto de extremidade até o Air</h1>                        
            </Descricao>
            
            <Container>
             <div className="container">
                <div className="container" ref={container}></div>
            </div>                       
            </Container>

            
        </Inicio>
    )}

    
    const Inicio = styled.div`  // Inicio vai substituir a div principal de BenvindoSection
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6rem 10rem;
    color: white;
`;
const Descricao = styled.div`  // Aqui iremos colocar em BenvindoSection, uma div para a descrição e o botão
    flex: 1;
    padding-right: 5rem;
    z-index: 5;

    h1{
        font-weight: bold;
        color: white;
    }
    span{
        font-weight: bold;
        color: white;
        height: 10px;
    }
    p{
        font-size: 15px;
        color: #95a5e6;
    }

`;

export const Container = styled.div`
  width: 550px;
  height: 250px;
 
 

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
 
`

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  strong {
    color: #EE6B26;
    font-weight: bold;
  }

  span {
    color: #707070;
  }

`

export default SecaoResumo