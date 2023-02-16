import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../cartItem/CartItem';
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from '../../services/firebase';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


import './SendOrder.css';

const SendOrder = () =>{

  const {productCartList, clearProductCartList, getTotal} = useContext(CartContext);
  const [orderId, setOrderId] = useState(undefined);
  console.log(productCartList)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [direction, setDirection] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')

    const sendOrder = async(event)=>{
        const newOrder = {
          buyer:{
            name: "name",
            email: "email@gmail.com",

          },
          items: productCartList,
          total: getTotal,
        };
        console.log(newOrder)
        const queryRef = collection(db,"orders");
        const response = await addDoc(queryRef,newOrder);
        console.log(response)
        setOrderId(response.id);
      }

    return(
        <div className='form-container'>
        <Form onSubmit={ev =>{
         ev.preventDefault();
        }}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label >Nombre y apellido</Form.Label>
            <Form.Control name='name' value={name} onChange={ev => setName(ev.target.value)}
             className="mb-2" id="inlineFormInput" placeholder="Nombre y apellido" required/>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label >Email</Form.Label>
            <Form.Control name='email'value={email} onChange={ev => setEmail(ev.target.value)}
            type="email" placeholder="Email" required/>
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Direccion</Form.Label>
          <Form.Control name='direction' value={direction} onChange={ev => setDirection(ev.target.value)}
           placeholder="Direccion" required/>
        </Form.Group>
  
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Provincia</Form.Label>
            <Form.Control name='state' value={state} onChange={ev => setState(ev.target.value)}
             placeholder="Provincia" required/>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Localidad</Form.Label>
            <Form.Control name='city' value={city} onChange={ev => setCity(ev.target.value)}
            placeholder="Localidad" required/>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Codigo postal</Form.Label>
            <Form.Control name='zip' value={zip} onChange={ev => setZip(ev.target.value)}
            placeholder="Codigo postal" required/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Metodo de pago</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Mercado pago</option>
            <option>Transferencia bancaria</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Tipo de factura</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Factura A</option>
            <option>Factura B</option>
          </Form.Select>
        </Form.Group>
      </Row>
  
        <button onClick={sendOrder}>
          Confirmar compra
        </button>
        <p>numero de pedido: {orderId}</p>
      </Form>
      </div>
    )
}

export default SendOrder