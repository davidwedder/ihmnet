import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {} from '../paginas/Medidas';
import {putmedidas} from '../services/api'

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
    h3{
        color: #95a5e6;
        padding-left: 5rem;
        font-weight: bold;
    }

    h6{
        padding-left: 1rem;
        color: #95a5e6;
        font-weight: bold;
        line-height: 12px;
    }

    h5{
        text-align: center;
        color: white;
        font-weight: normal;
    }
    
    img{
        padding-bottom: 1rem;
        max-width:220px;
        max-height:220px;
        width: auto;
        height: auto;
    }
`;

const Info = styled.div`
    text-decoration: none;
`;

const Titulo = styled.div`
    text-align: center;
    color: yellow;
    font-weight: bold;
    font-size: 12px;
`;

const Titulo1 = styled.div`
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 15px;
`;

const Card = ({projeto})=>{
    var ultimo = projeto.medidas.length

    let posicao
    let posicao1
    let statusTomada
    let data
    let hora

    const [OnOff, setOnOff] = React.useState()
    const [OnOff1, setOnOff1] = React.useState()
    const [OnOffTomada, setOnOffTomada] = React.useState()
    const [datalocal, setDataLocal] = useState()
    const [horalocal, setHoraLocal] = useState()

    function Inicio(){
        setOnOff(projeto.medidas[ultimo-1].posicao)
        setOnOff1(projeto.medidas[ultimo-1].posicao1)
        setOnOffTomada(projeto.medidas[ultimo-1].statusTomada)
        setDataLocal(projeto.medidas[ultimo-1].data)
        setHoraLocal(projeto.medidas[ultimo-1].hora)
    }
    
    const Interruptor = ()=>{
        console.log("OnOff antes", OnOff)
        let inv = !OnOff
        setOnOff(inv)
        console.log("OnOff depois", inv)
        posicao = inv
        posicao1 = OnOff1
        data = datalocal.toString()
        hora = horalocal.toString() 
        let id = projeto._id
        putmedidas(id, {medidas: {data, hora, posicao, posicao1}})
    }

    const Interruptor1 = ()=>{
        console.log("OnOff1 antes", OnOff)
        let inv = !OnOff1
        setOnOff1(inv)
        console.log("OnOff1 depois", inv)
        posicao = OnOff
        posicao1 = inv
        data = datalocal.toString()
        hora = horalocal.toString() 
        let id = projeto._id
        putmedidas(id, {medidas: {data, hora, posicao, posicao1}})

    }

    const InterruptorTomada = ()=>{
        console.log("OnOffTomada antes", OnOffTomada)
        let inv = !OnOffTomada
        setOnOffTomada(inv)
        console.log("OnOffTomada depois", inv)
        statusTomada = inv
        data = datalocal.toString()
        hora = horalocal.toString() 
        let id = projeto._id
        putmedidas(id, {medidas: {data, hora, statusTomada}})

    }

    useEffect(()=>{
        Inicio()
    },[])

    return(  
      <StyledCard>
            <div>
                <Content>
                    {projeto.tipo === 1 &&
                        <div>
                            <Titulo1>{projeto.nome}</Titulo1>
                            <Titulo>Medidor Energia</Titulo>
                            <Link to={`/medidas/${projeto._id}`}>
                            <img src= {projeto.imagem} alt="Description"/>
                            </Link>
                            <h5>Últimas medidas:</h5>
                            <h6>{projeto.medidas[ultimo-1].data} {projeto.medidas[ultimo-1].hora}</h6>
                            <h6>{projeto.medidas[ultimo-1].netst}</h6>
                            <Info>
                                <h6 style={projeto.medidas[ultimo-1].kwh > 1500 ? {color:"red"}:{color:"white"}}>Kw/h :{projeto.medidas[ultimo-1].kwh}</h6>
                                <h6>Amp :{projeto.medidas[ultimo-1].corrente}</h6>
                                <h6>Voltagem :{projeto.medidas[ultimo-1].voltagem}</h6>
                                <h6>Ft.P. :{projeto.medidas[ultimo-1].fp}</h6>
                            </Info>
                        </div>
                    }
                    {projeto.tipo === 2 &&
                        <div>
                            <Titulo1>{projeto.nome}</Titulo1>
                            <Titulo>Interruptor</Titulo>
                            <Link to={`/medidas/${projeto._id}`}>
                                <img src= {projeto.imagem} alt="Description"/>
                            </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button" class="btn btn-primary btn-sm" onClick={Interruptor}>On/Off</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button" class="btn btn-primary btn-sm" onClick={Interruptor1}>On/Off</button>
                            <br/>
                            <h5>Status Atual:</h5>
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {OnOff === true ? (<img src='circuloVerde_resized.png' thumbnail alt='imagem'></img>) : (<img src='circuloVermelho_resized.png' thumbnail alt='imagem'></img>)}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {OnOff1 === true ? (<img src='circuloVerde_resized.png' thumbnail alt='imagem'></img>) : (<img src='circuloVermelho_resized.png' thumbnail alt='imagem'></img>)}

                        </div>                    
                    }
                    {projeto.tipo === 3 &&
                        <div>
                            <Titulo1>{projeto.nome}</Titulo1>
                            <Titulo>Tomada</Titulo>
                            <Link to={`/medidas/${projeto._id}`}>
                                <img src= {projeto.imagem} alt="Description"/>
                            </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button" class="btn btn-primary btn-sm" onClick={InterruptorTomada}>On/Off</button>
                            <h5>Status Atual:</h5>
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {OnOffTomada ? (<img src='circuloVerde_resized.png' thumbnail alt='imagem'></img>) : (<img src='circuloVermelho_resized.png' thumbnail alt='imagem'></img>)}
                        </div>                                           
                    }
                      {projeto.tipo === 4 &&
                        <div>
                            <Titulo1>{projeto.nome}</Titulo1>
                            <Titulo>Estação Meteorológica</Titulo>
                            <Link to={`/medidas/${projeto._id}`}>
                            <img src= {projeto.imagem} alt="Description"/>
                            </Link>
                            <h5>Últimas medidas:</h5>
                            <h6>{projeto.medidas[ultimo-1].data} {projeto.medidas[ultimo-1].hora}</h6>
                            <h6>{projeto.medidas[ultimo-1].netst}</h6>
                            <Info>
                                <h6 style={projeto.medidas[ultimo-1].temperatura > 30 ? {color:"red"}:{color:"white"}}>Temp :{projeto.medidas[ultimo-1].kwh}</h6>
                                <h6>Humi :{projeto.medidas[ultimo-1].humidity}</h6>
                                <h6>Alt :{projeto.medidas[ultimo-1].altitude}</h6>
                                <h6>Pres :{projeto.medidas[ultimo-1].pressao}</h6>
                            </Info>
                        </div>                                           
                    }
                </Content>
            </div>
        </StyledCard>
        
    )
}
export default Card 
