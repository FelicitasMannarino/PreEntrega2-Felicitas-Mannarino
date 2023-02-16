import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';


import './CartItem.css';

const CartItem = ({product}) =>{

    const {removeProduct} = useContext(CartContext);

    return(
        <div className='cart-item'>
        <div className='cart-img'>
            <img src={product.image} alt={product.name}/>
        </div>
        <p className='cart-name'>{product.name}</p>
        <div className='cart-info'>
            <button onClick={()=>removeProduct(product.id)}><i class="bi bi-x-lg"></i></button>
            <p className='cart-qty'>Cant.</p>
            <ul>
                <li>{product.quantity}</li>
                <li>$ {product.totalPrice}</li>
            </ul>
        </div>
    </div>
        
        
    )
}

export default CartItem