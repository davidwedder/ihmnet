import React from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import { useApi } from '../hooks/useApi';
import {Container, Table} from "react-bootstrap"




const Titulo = styled.div`
    h4{
        padding-left: 1rem;
        font-weight: bold;
        color: white;
    }
   
`;


const DetalhesDevice = ()=>{
    const {id} = useParams()
    const {data} = useApi(`/devices/detalhes/${id}`)
    return(
        
        <Container> 
               
            <Titulo><h4>{data?.message?.nome}</h4></Titulo>
            <Table striped bordered hover variant="dark">
                {data?.message?.tipo === 1 &&
                    <thead>
                        <tr>
                            <th>Kw/H</th>
                            <th>Corrente</th>
                            <th>Voltagem</th>
                            <th>Fator de Potência</th>
                            <th>Data</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                }
                {data?.message?.tipo === 1 &&
                    <tbody>
                        {data?.message?.medidas?.map(med =>{
                            return(<tr>
                                <td style={med.kwh > 1500 ? {color:"red"}:{color:"white"}}>{med.kwh}</td>
                                <td>{med.corrente}</td>
                                <td>{med.voltagem}</td>
                                <td>{med.fp}</td>
                                <td>{med.data}</td>
                                <td>{med.hora}</td> 
                            </tr>)

                        })}

                    </tbody> 
                             
                }
               
                {data?.message?.tipo === 2 &&
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Hora</th>
                            <th>Interruptor 1</th>
                            <th>Interruptor 2</th>
                            <th>Interruptor 3</th>
                        </tr>
                    </thead>
                }
                {data?.message?.tipo === 2 &&
                    <tbody>
                        {data?.message?.medidas?.map(med =>{
                            return(<tr>
                                <td>{med.data}</td>
                                <td>{med.hora}</td>
                                {med.posicao === true &&
                                    <td>Ligada</td> 
                                }
                                {med.posicao === false &&
                                    <td>Desligada</td> 
                                }
                                {med.posicao1 === true &&
                                    <td>Ligada</td> 
                                }
                                {med.posicao1 === false &&
                                    <td>Desligada</td> 
                                }
                            </tr>)
                        })}
                    </tbody>
                }

                {data?.message?.tipo === 3 &&
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Hora</th>
                            <th>Interruptor</th>
                        </tr>
                    </thead>
                }
                {data?.message?.tipo === 3 &&
                    <tbody>
                        {data?.message?.medidas?.map(med =>{
                            return(<tr>
                                <td>{med.data}</td>
                                <td>{med.hora}'</td>
                                {med.statusTomada === true &&
                                    <td>Ligada</td> 
                                }
                                {med.statusTomada === false &&
                                    <td>Desligada</td> 
                                }
                            </tr>)
                        })}
                    </tbody>
                }
                
                  {data?.message?.tipo === 4 &&
                    <thead>
                        <tr>
                            <th>Temperatura</th>
                            <th>Humidade</th>
                            <th>Altitude</th>
                            <th>Pressão</th>
                            <th>Data</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                }
                {data?.message?.tipo === 4 &&
                    <tbody>
                        {data?.message?.medidas?.map(med =>{
                            return(<tr>
                                <td style={med.temperatura > 30 ? {color:"red"}:{color:"white"}}>{med.temperatura}</td>
                                <td>{med.humidity}</td>
                                <td>{med.altitude}</td>
                                <td>{med.pressao}</td>
                                <td>{med.data}</td>
                                <td>{med.hora}</td> 
                            </tr>)
                        })}
                    </tbody>
                }
                               
            </Table>             
                
        </Container>
    )
}





export default DetalhesDevice

   

