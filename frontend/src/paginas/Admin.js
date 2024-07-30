import React, {useEffect} from 'react'
import styled  from 'styled-components'
import {Container, Tabs, Tab} from "react-bootstrap"
import ListaDevices from '../componentes/admin/ListaDevices';
import AdmDevices from '../componentes/admin/AdmDevices';
import NovoDevice from '../componentes/admin/NovoDevice'
import {useNavigate} from 'react-router-dom'
import Userfront from '@userfront/react'
import jwtDecode from 'jwt-decode'
import Dashboard1 from '../componentes/admin/Dashboard/BarChart';
import Dashboard2 from '../componentes/admin/Dashboard/LineChart';
import Dashboard3 from '../componentes/admin/Dashboard/PieChart';
import Dashboard4 from '../componentes/admin/Dashboard/BarChart'
Userfront.init("qbjqg94n")

const Descricao = styled.div`
    flex: 1;
    padding-right: 5rem;
    padding-top: 1rem;
    background-color: black;
    z-index: 5;
    h1{
        padding-left: 1rem;
        font-weight: bold;
        color: yellow;
    }
`;

 const Geral = styled.div`
    h5{
        padding-left: 2rem;
        color: yellow;
        font-weight: bold;
    }

    .BarChart{
        padding-right:14rem;
        margin-top: 50px
    }
    .BarChart2{
       padding-left:35rem;
       margin-top: -216px;
    }

    .PieChart{
        padding-left: 5rem;
        
    }
    .LineChart{     
        position:absolute;
        padding-left: 35rem;
        margin-top: -448px;
        
    }

 `;

 



const Admin = ({location})=>{
    let navigate = useNavigate();
    useEffect(() => {
        if (!Userfront.accessToken()){
            localStorage.setItem('us', ' ')
            return navigate("/login")
        }
    })
    const acessoData = jwtDecode(Userfront.accessToken())
    const acesso = JSON.stringify(acessoData)
    console.log(acesso)
    const userData = jwtDecode(Userfront.idToken())
    const user = JSON.stringify(userData)
    console.log(user)

    return(
        <Geral>
            <Container>
              
           
            <div>
                <Tabs defaultActiveKey="devices" id="tab1" className="mb-1">
                    <Tab eventKey="devices" title="Meus Devices">
                        <ListaDevices/>
                    </Tab>
                    <Tab eventKey="detalhes" title="Detalhes">
                        <AdmDevices/>
                    </Tab>
                    <Tab eventKey="novo" title="Novo Device">
                        <NovoDevice/>
                    </Tab>
                    <Tab eventKey="email" title="User Logado">
                        <h5>{userData.email}</h5>
                    </Tab>
                    <Tab eventKey="dashboard" title="Dashboard">
                        <div class="BarChart" ><Dashboard1/></div>                       
                        <div class="PieChart" ><Dashboard3/></div>
                        <div class="LineChart" ><Dashboard2/></div>
                        <div class="BarChart2" ><Dashboard4/></div>
                    </Tab>
                    <Tab eventKey="map" title="Map">
                       <></>                        
                    </Tab>
                </Tabs>
            </div>
         </Container>
      </Geral>
    )
}
export default Admin