import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../services/firebase';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

import './SendOrder.css';

const SendOrder = () =>{

  const {productCartList,getTotal} = useContext(CartContext);
  const [orderId, setOrderId] = useState(undefined);
  console.log(productCartList)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [direction, setDirection] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [payMethod, setPayMethod] = useState('')
  const [bill, setBill] = useState('')

    const sendOrder = async(event)=>{
        const newOrder = {
          buyer:{
            nombre: name,
            email: email,
            direccion: direction,
            provincia: state,
            localidad: city,
            cp: zip,
            metodoDePago: payMethod,
            factura: bill
          },
          items: productCartList,
          total: getTotal(),
        };
        console.log(newOrder)
        const queryRef = collection(db,"orders");
        const response = await addDoc(queryRef,newOrder);
        console.log(response)
        setOrderId(response.id);
      }

      const [show, setShow] = useState(false);

      const handleShow = () => setShow(true);

      const orderConfirm = () => {handleShow();sendOrder()}

    return(
        <div className='form-container'>
          <Form onSubmit={ev =>{ev.preventDefault();}}>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Control name='name' value={name} onChange={ev => setName(ev.target.value)} className="mb-2" id="inlineFormInput" placeholder="Nombre y apellido" required/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control name='email'value={email} onChange={ev => setEmail(ev.target.value)} type="email" placeholder='Email' required/>
              </Form.Group>
            </Row>
  
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Control name='direction' value={direction} onChange={ev => setDirection(ev.target.value)} placeholder="Direccion" required/>
            </Form.Group>
  
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control name='state' value={state} onChange={ev => setState(ev.target.value)} placeholder="Provincia" required/>
              </Form.Group>
  
              <Form.Group as={Col} controlId="formGridState">
                <Form.Control name='city' value={city} onChange={ev => setCity(ev.target.value)} placeholder="Localidad" required/>
              </Form.Group>
  
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Control name='zip' value={zip} onChange={ev => setZip(ev.target.value)} placeholder="Codigo postal" required/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Metodo de pago</Form.Label>
                <Form.Select defaultValue="Choose..." name='payMethod' value={payMethod} onChange={ev => setPayMethod(ev.target.value)}>
                  <option>Mercado pago</option>
                  <option>PayPal</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Tipo de factura</Form.Label>
                <Form.Select defaultValue="Choose..."  name='bill' value={bill} onChange={ev => setBill(ev.target.value)}>
                  <option>Factura A</option>
                  <option>Factura B</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Form>
          <p className='order-info'>Todos los campos son obligatorios para la confirmacion de la compra.</p>
          <button disabled= {name === "" || email === "" || direction === "" || zip === "" || state === "" || city === ""} className='order-confirm' onClick={orderConfirm}>Confirmar compra</button>
          <div className='modal'>
            <Modal show={show}>
              <Modal.Header>
                <Modal.Title><h3>¡Gracias por tu compra!</h3></Modal.Title>
                <Link to='/'><i className="bi bi-x-lg"></i></Link>
              </Modal.Header>
              <Modal.Body>Tu numero de pedido es: {orderId} y lo estaras recibiendo entre 6 y 7 dias habiles.</Modal.Body>
              <Modal.Footer>
                <Link to='/productos'><h6>Segui navegando por la web.</h6></Link>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
    )
}

export default SendOrder