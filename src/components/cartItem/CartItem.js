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
        <div className='cart-info'>
            <p>{product.name}</p>
            <p>precio unitario: {product.price}</p>
            <p>cantidad: {product.quantity}</p>
            <p>Precio total: {product.totalPrice}</p>
            <button onClick={()=>removeProduct(product.id)}>Eliminar producto</button>
        </div>
    </div>
        
        
    )
}

export default CartItem