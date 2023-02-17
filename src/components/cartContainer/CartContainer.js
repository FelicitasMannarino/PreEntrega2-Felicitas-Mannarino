import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../cartItem/CartItem';
import { Link } from 'react-router-dom';

import './CartContainer.css'

const CartContainer = () => {

  const {productCartList, clearProductCartList, getTotal} = useContext(CartContext);


  return (
    <div className='cart-container'>
      <div>
        {
          productCartList.length>0 ?
          <>
          <div className='cart-container-shop'>
            <Link className='cart-container-link' to='/productos'><i className="bi bi-chevron-left cart-container-i"></i><p> Seguir comprando</p></Link>
            <button onClick={clearProductCartList}><p>Vaciar el carrito</p></button>
          </div>
            {
              productCartList.map(product=>(
                <CartItem key={product.id} product={product}/>
              ))
            }
          <p className='cart-container-total'>Total: $ {getTotal()}</p>
          <div className='cart-container-back-check'>
            <Link className='cart-container-link' to='/compra'><p className='cart-container-check'>Checkout</p></Link>
          </div>
          </>
          :
          <div className='cart-empty'>
            <p>Todavia no tenes ningun articulo en el carrito.</p>
            <p >Mira nuestros <Link to='/productos' className='cart-empty-link'>productos</Link></p>
          </div>
        }
      </div>
    </div>
  )
}

export default CartContainer