import React from 'react'
//import moment from 'moment'
import styled from 'styled-components'
import FormContato from '../componentes/FormContato';

const ContStyled = styled.div`
    padding: 10rem 25rem;
    color:#8aacdf;
    min-height: 50vh;

`;

const Title = styled.div`
    margin-bottom: 4rem;
    
`;

const Mensagens = ()=>{
    return(
        <ContStyled>            
            <FormContato />
        </ContStyled>
    )
}
export default Mensagens

