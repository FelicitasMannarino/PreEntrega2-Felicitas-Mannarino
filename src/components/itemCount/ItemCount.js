import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [count, setCount] = useState(initial);

    const decrementar = ()=>{
        if(count>1){
            setCount(count-1)
        }
    }

    const incrementar = ()=>{
        if(count<stock){
            setCount(count+1)
        }
    }

    return(

      <div className='box-count'>
        <div className='box-count-children'>
          <div className='box-count-grandchild'>
            <button className='box-count-i' disabled={stock===0} onClick={decrementar}><p>-</p></button>
            <p className='count'>{count}</p>
            <button className='box-count-i box-count-im' disabled={stock===0||count === stock} onClick={incrementar}><p>+</p></button>
          </div>
          <button  className='box-count-add' disabled={stock === 0||count === stock} onClick={()=>onAdd(count)||handleShow()}><p>Agregar al carrito</p></button>
          <div className='modal'>
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton/>
              <Modal.Body>¡Tu producto ha sido agregado con exito!</Modal.Body>
              <Modal.Footer>
                <Link to='/cart'><p>Ir al carrito</p></Link>
              </Modal.Footer>
            </Modal>
           </div>
        </div>
      </div>
    
    )
    
}

export default ItemCount