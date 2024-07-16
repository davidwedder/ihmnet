import React from 'react'
import styled  from 'styled-components'
import Cards from "../componentes/Cards"
import Userfront from '@userfront/react'
import {useApi} from '../hooks/useApi'
import jwtDecode from 'jwt-decode'




Userfront.init("qbjqg94n")

const Listacards = styled.div`
    display: grid;
    grid-template-columns: 200px repeat(auto-fill, 200px);  
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
`;

const Listadevices = styled.div`
    min-height: 30vh;
    overflow: hidden;
    padding: 5rem 10rem;
`;

if(!Userfront.accessToken()){
    localStorage.setItem('us', ' ')
} 

const Medidas = ()=>{
    
    const userData = jwtDecode(Userfront.idToken())
    const emailF = userData.email
    const {data} = useApi(`/devices/${emailF}`)

//===========================================================
    // let updateController
    // let dados1
    // //let data    

    // const [dadosBase, setDadosBase] = React.useState()

    // function FuncaoAtualizaDados(){
    //     // dados1 = useApi(`/devices/${email}`)
    //     // console.log("Dados", dados1)
    //     // data = dados1.data
    //     // //setDadosBase(data)
    // }

    // async function updateInfos(){
    //     await FuncaoAtualizaDados()
    //     updateController = setTimeout(()=> updateInfos(), 1000)
    //     updateInfos()
    // }
    // React.useEffect(()=>{
    //     updateInfos()
    //     return()=>{clearTimeout(updateController)}
    // },[])

//===========================================================

    return(
        <Listadevices>
          <Listacards>
            {data?.message?.map(projeto =>{
                return(<Cards key={projeto._id} projeto={projeto}/>)
            })}
        </Listacards>
    </Listadevices>
    )
}
export default Medidas


