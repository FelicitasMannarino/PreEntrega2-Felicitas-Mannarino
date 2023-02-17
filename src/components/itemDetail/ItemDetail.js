import ItemCount from '../itemCount/ItemCount' 
import { useState } from 'react'
import { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import {CartContext} from '../../context/CartContext'

import './ItemDetail.css'

const ItemDetail = ({product}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const {addProduct} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    const onAdd = (count)=>{
        addProduct(product,count);
        setQuantity(count);
    }

    return (

      <div className='detail'>
        <div className='detail-container'>
          <img src={product.image} alt={product.name} />
          <div className='detail-text'>
            <h2>{product.name}</h2>
            <p className='detail-price'>$ {product.price}</p>
            <p className='detail-off'><i class="bi bi-cash"></i> 10% de descuento pagando con transferencia.</p>
            <p className='detail-description'>{product.description}</p>
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
            <button onClick={handleShow}><p className='detail-pay'>Metodos de pago</p></button>
          </div>
        </div>
        <Modal className='modal' show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
          <Modal.Title><p>Formas de pago</p></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src='https://logosmarcas.net/wp-content/uploads/2020/04/PayPal-Logo.png' alt='PayPal'/>
            <img src='https://guiabancario.com.br/wp-content/uploads/2020/08/mercado-pago-logo-0.png' alt='MercadoPago'/>
            <img src='https://tse2.mm.bing.net/th?id=OIP.eI_8ycGvNgK9SaaK8yH8JQAAAA&pid=Api&P=0' alt='TransferenciaBancaria'/>
          </Modal.Body>
        </Modal>
      </div>

    )

}


export default ItemDetail