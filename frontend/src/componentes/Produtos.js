import React from 'react'
import styled from 'styled-components'
import {Container, Table} from "react-bootstrap"
import Sensor from "../assets/Sensor-Nivel.png"
import Wealther from "../assets/Wealther.png"
import ZigBee from "../assets/Zigbee.png"

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

const Cursos = () => {
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
                        <td><img width="200px"src={ZigBee} alt="temp"/></td>
                        <td><h6>Sensor Temperatura Humidade </h6></td>
                        <td><h6>O sensor de temperatura e umidade é um dispositivo crucial para diversas aplicações, desde controle climático em ambientes domésticos até monitoramento rigoroso em processos industriais e armazenamento de produtos sensíveis. 
                        Esse sensor fornece uma leitura precisa e contínua de dois parâmetros ambientais críticos, permitindo a tomada de decisões informadas e a otimização de sistemas para melhor eficiência energética, conforto e segurança.</h6></td>
                        <td><a href="" target="_blank" rel="noopener noreferrer"><h5>Sensor IHM-001.</h5></a></td>
                    </tr>
                    <tr>
                        <td><img width={"200px"} src={Wealther} alt="energy"/></td>
                        <td><h6>Weather Station</h6></td>
                        <td><h6>Identifique e gerencie todos os ativos em todas as suas subestações, geração de energia e redes de distribuição</h6></td>
                        <td><a href="" target="_blank" rel="noopener noreferrer"><h5>Sensor IHM-002.</h5></a></td>
                    </tr>
                    <tr>
                        <td><img width={"200px"} src={Sensor} alt="energy"/></td>
                        <td><h6>Sensor de Nivel</h6></td>
                        <td><h6>O Sensor de Nível para Líquidos é uma combinação de dispositivos inteligentes que permitem detectar com exatidão a coluna de líquido em um reservatório, caixa d’água, lago, tanque ou poço. O sensoriamento acontece por meio da integração da sonda + extensão de corrente (C104) + transmissor (podendo ser Mobile ITS, LoRa ou Zigbee)</h6></td>
                        <td><a href="" target="_blank" rel="noopener noreferrer"><h5>Sensor IHM-003.</h5></a></td>
                    </tr>
                                           
                </tbody>
            </Table>
        </Container>
    </Escolhas>
    )
}

export default Cursos