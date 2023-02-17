import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import './CartItem.css';

const CartItem = ({product}) =>{

    const {removeProduct} = useContext(CartContext);

    return(
        <div className='cart-item'>
          <div className='cart-img'>
            <img src={product.image} alt={product.name}/>
          </div>
          <Link to={`/productos/${product.name}/${product.id}`}><p className='cart-name'>{product.name}</p></Link>
          <div className='cart-info'>
            <button onClick={()=>removeProduct(product.id)}><i class="bi bi-x-lg"></i></button>
            <p className='cart-qty'>Cant.</p>
            <ul>
              <li>{product.quantity}</li>
              <li className='cart-price'>$ {product.totalPrice}</li>
            </ul>
           </div>
        </div>    
    )
}

export default CartItem