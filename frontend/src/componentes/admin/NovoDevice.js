import React, {useState} from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import styled  from 'styled-components'
import { addRegistro } from '../../services/api';

const StyleForm = styled.div`

    
  
  
`;

const NovoDevice = ()=>{
    const [nome, setNome] = useState()
    const [descricao, setDescricao] = useState()
    const [email, setEmail] = useState()
    const [imagem, setImagem] = useState()
    const [tipo, setTipo] = useState()

    const data = {nome, descricao, email, imagem, tipo}
   


    function click (){
        addRegistro(data)
    }

    return (
        <Container>
            <StyleForm>
                
                <Form>
                <Form.Group className="mb-3" controlId="formBasicTipo">
                        <Form.Label><h6>Tipo de device</h6></Form.Label>
                            <Form.Control 
                                type="text" 
                                value={tipo}
                                placeholder="Tipo de device - 1, 2 , 3 e 4"
                                onChange={(e)=> setTipo(e.target.value)}
                             />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><h6>Email</h6></Form.Label>
                            <Form.Control 
                                type="email" 
                                value={email}
                                placeholder="Digite seu email"
                                onChange={(e)=> setEmail(e.target.value)}
                             />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><h6>Device</h6></Form.Label>
                           <Form.Control 
                                type="text" 
                                value={nome}
                                placeholder="O nome para seu device" 
                                onChange={(e)=> setNome(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><h6>Descrição</h6></Form.Label>
                            <Form.Control 
                                as="textarea" rows='2' 
                                value={descricao}
                                placeholder="Uma descrição para o seu device" 
                                onChange={(e)=> setDescricao(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><h6>Imagem</h6></Form.Label>
                            <Form.Control 
                                type="text"
                                value={imagem}
                                placeholder="Um endereço de uma imagem" 
                                onChange={(e)=> setImagem(e.target.value)}
                            />
                    </Form.Group>
                    <Button variant="primary" onClick={()=> click(data.email, data.nome, data.descricao, data.imagem, data.tipo)} type='submit'>Enviar</Button>&emsp;&emsp;
                    <Button variant="secondary" type="submit">Cancelar</Button>
                </Form>
            </StyleForm>
        </Container>
 )
}

export default NovoDevice