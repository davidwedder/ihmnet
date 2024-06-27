import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledCard = styled.div`
    box-sizing: border-box;
    background-color: #0d0d0d;
    border-color: black;
    box-shadow: -3px 1px 15px -2px rgba(0,0,0,0.73);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden; 
    a{
        text-decoration: none;
    }

`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    p{
        color: yellow;
        display: flex;
        padding-left: 7rem;
        margin-top:-70px;
        padding-bottom: 0.2rem;
    
        
    }

    h6{
        padding-left: 1rem;
        color: white;
        font-weight: bold;
        line-height: 12px;
     }
    h5{
        text-align: center;
        color: white;
        font-weight: normal;
    }
    h6T{
        text-align: center;
        color: yellow;
        font-weight: bold;
        font-size: 12px;
        line-height: 5px;
        padding-bottom: 15px;
    }
    lb{
        color: white; 
    }
    img{
        padding-bottom: 1rem;
        max-width:200px;
        max-height:200px;
        width: auto;
        height: auto;
    }
`;

const Info = styled.div`
    text-decoration: none;
`;


const Card = ({projeto})=>{
    console.log(projeto)
    var ultimo = projeto.medidas.length
    console.log(ultimo)
    return(
        <StyledCard>
            <Link to={`/medidas/${projeto._id}`}>
                <Content>
                    <h5>{projeto.nome}</h5>
                    <img src= {projeto.imagem} alt="Description"/>
                    <h5>Últimas medidas:</h5>
                    <h6T>{projeto.medidas[ultimo-1].data} {projeto.medidas[ultimo-1].hora}</h6T>
                    <h6T>{projeto.medidas[ultimo-1].netst}</h6T>
                    <Info>
                        <h6>Temperatura : <p>{projeto.medidas[ultimo-1].temperatura}C</p></h6>
                        <h6>Humidade :<p>{projeto.medidas[ultimo-1].humidity}%</p></h6>
                        <h6>Altitude :<p>{projeto.medidas[ultimo-1].altitude}</p></h6>
                        <h6>Pressão :<p>{projeto.medidas[ultimo-1].pressao}</p></h6>
                    </Info>
                </Content>
            </Link>
        </StyledCard>
    )
}
export default Card 

