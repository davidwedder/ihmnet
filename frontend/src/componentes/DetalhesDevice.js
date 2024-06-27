import React from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import { useApi } from '../hooks/useApi';
import {Container, Table} from "react-bootstrap"
import { Chart } from 'chart.js';

//import moment from 'moment'
//import jwtDecode from 'jwt-decode'
//import Userfront from '@userfront/react'

//Userfront.init("qbjqg94n") 

const Titulo = styled.div`
    h4{
        padding-left: 1rem;
        font-weight: bold;
        color: white;
        text-align: center;
    }

  
`;


const DetalhesDevice = ()=>{
    const {id} = useParams()
    const {data} = useApi(`/devices/detalhes/${id}`)
    console.log(data)
    return(
        <Container>
                 
            <Titulo><h4>{data?.message?.nome}</h4></Titulo>
            <Table striped bordered hover variant="dark">        
            
                <thead>
                    <tr>
                        <th>Temperatura</th>
                        <th>Umidade</th>
                        <th>Altitude</th>
                        <th>Pressão</th>
                        <th>Data</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.message?.medidas?.map(med =>{
                        return(<tr>
                            <td>{med.temperatura}</td>
                            <td>{med.humidity}</td>
                            <td>{med.altitude}</td>
                            <td>{med.pressao}</td>
                            <td>{med.data}</td>
                            <td>{med.hora}'</td> 
                        </tr>)
                    })}
                </tbody>
            </Table>
            
            
        </Container>
    )
}

export default DetalhesDevice

