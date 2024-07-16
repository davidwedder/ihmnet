import React from 'react'
import styled from 'styled-components'
import {Container, Table} from "react-bootstrap"
import Sensor from "../assets/Sensor-Nivel.png"
import Wealther from "../assets/Wealther.png"
import ZigBee from "../assets/Zigbee.png"
import medidor from "../assets/medidor.jpg"

const Escolhas = styled.div`
    padding-left: 3rem;
    padding-top: 3rem;
    a{
        color:#8aacdf;
        text-decoration: none;
        padding-top: 0rem;
        font-size: 33px;

    }
    h6{
        color: #8aacdf;
        text-align: justify;
    }
    h5{
        color: white;
        text-align: center;
    }
    th{
        color:#8aacdf;
    }
`;

const Foto = styled.img`
    height: 83px;
`;



const Produtos = () => {
    return (
        <Escolhas>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Imagem</th>
                            <th>Equipamento</th>
                            <th>Descrição</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img width="200px"src={Wealther} alt="temp"/></td>
                            <td><h6>Medidor Energia </h6></td>
                            <td><h6>Este dispositivo pode monitorar o consumo de energia bidirecional, se houver um sistema solar fotovoltaico na casa do usuário. Após instalado de acordo com nosso diagrama de fiação, este dispositivo pode monitorar a energia gerada pelo sistema solar fotovoltaico e a energia consumida pela rede elétrica da cidade.</h6></td>
                            <td><a href="" target="_blank" rel="noopener noreferrer"><h5>Sensor IHM-001.</h5></a></td>
                        </tr>
                       
                                               
                    </tbody>
                </Table>
            </Container>
        </Escolhas>
        )
}

export default Produtos