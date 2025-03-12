import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import {Form} from 'react-bootstrap'
import { sendMail } from '../services/api'

const Label = styled.div`
      color:#8aacdf;
`;

const StyleForm = styled.div`
   

    .ButtonContato{
        font-weight: bold;
        
        cursor: pointer;
       
        width: auto;
        background: black;
        color: white;
        border: 2px solid white;
        border-radius: 3px;
        transition: all 0.5s ease;
        &:hover{
            background-color: #F93D02;
            color: white;
        }
    }


  
  
    
`;

const FormContato = ()=>{
    const [status, setStatus] = useState('Enviar')
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [mensagem, setMensagem] = useState()

function manipulaSubmite(e){
     e.preventDefault()
     setStatus('Enviando...')
    const newSendEmail = {
        nome: nome,
        email: email,
        mensagem: mensagem
    }
    sendMail(newSendEmail)
    //id='form' onSubmit={manipulaSubmite} -- sendMail está em api.js
}
    return(
        <Container>
            <StyleForm>
                <Form id='form' onSubmit={manipulaSubmite}>
                    <Form.Group className="mb-3" controlId="nome"></Form.Group>
                    <Form.Label> <Label>Nome:</Label></Form.Label>
                    <Form.Control 
                        type="text"
                        value={nome}
                        onChange={(e)=> setNome(e.target.value)}
                    />
                    <Form.Group className="mb-3" controlId="email"></Form.Group>
                    <Form.Label> <Label>Email:</Label></Form.Label>
                    <Form.Control 
                        type="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                    <Form.Group className="mb-3" controlId="mensagem"></Form.Group>
                    <Form.Label> <Label>Mensagem:</Label></Form.Label>
                    <Form.Control 
                        type="text"
                        value={mensagem}
                        onChange={(e)=> setMensagem(e.target.value)}
                    />
                    <br/>
                    
                    <button className='ButtonContato' type='submit'>{status}</button>
                    
                    
                </Form>
            </StyleForm>
        </Container>
    )
}
export default FormContato

//<form action="mailto:someone@example.com" method="post" enctype="text/plain"></form>


