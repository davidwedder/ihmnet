import React, {useState} from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import styled  from 'styled-components'
import { addRegistro } from '../../services/api';

const StyleForm = styled.div`
    margin-top: 40px;
    margin-left: 100px;
    display: block;
    width: 900px;
    padding-left: 10rem;
    padding-bottom: 2rem;
    h5{
        color: white;
    }
    h6{
        color: white;
        
    }
`;



const NovoDevice = ()=>{
    const [nome, setNome] = useState()
    const [descricao, setDescricao] = useState()
    const [email, setEmail] = useState()
    const [imagem, setImagem] = useState()
    const [tipo, setTipo] = useState()

    const data = {nome, descricao, email, imagem, tipo}

    function click (){
        //console.log(data)
        addRegistro(data)
    }

    return (
        <Container>
            <StyleForm>
                
                <Form>
                    <Form.Group controlId="formBasicSelect">
                        <Form.Label><h6>Selecione o tipo de device</h6></Form.Label>
                            <Form.Control as='select' value={tipo} onChange={e => {console.log('TIPO', e.target.value)
                                setTipo(e.target.value)}}>
                                <option value='0'>Selecione Tipo</option>
                                <option value='1'>Acionador Simples</option>
                                <option value='2'>Acionador de carga duplo</option>
                                <option value='3'>Acionador de carga triplo</option>
                                <option value='4'>Sensor corrente</option>
                                <option value='5'>Weather Station</option>
                            </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="setandoEmail">
                        <Form.Label><h6>Email</h6></Form.Label>
                            <Form.Control 
                                type="email" 
                                value={email}
                                placeholder="Digite seu email"
                                onChange={(e)=> setEmail(e.target.value)}
                             />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="setandoNome">
                        <Form.Label><h6>Device</h6></Form.Label>
                           <Form.Control 
                                type="text" 
                                value={nome}
                                placeholder="O nome para seu device" 
                                onChange={(e)=> setNome(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="setandoDescrcao">
                        <Form.Label><h6>Descrição</h6></Form.Label>
                            <Form.Control 
                                as="textarea" rows='2' 
                                value={descricao}
                                placeholder="Uma descrição para o seu device" 
                                onChange={(e)=> setDescricao(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="setandoImagem">
                        <Form.Label><h6>Imagem</h6></Form.Label>
                            <Form.Control 
                                type="text"
                                value={imagem}
                                placeholder="Um endereço de uma imagem" 
                                onChange={(e)=> setImagem(e.target.value)}
                            />
                    </Form.Group>
                    <Button variant="primary" onClick={()=> click(data.email, data.nome, data.descricao, data.imagem, data.tipo)} type='submit'>Enviar</Button>&emsp;&emsp;
                    <Button variant="danger" type="submit">Cancelar</Button>
                </Form>
            </StyleForm>
        </Container>
 )
}

export default NovoDevice