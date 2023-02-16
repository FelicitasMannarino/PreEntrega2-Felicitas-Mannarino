import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../cartItem/CartItem';
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from '../../services/firebase';
import { Link } from 'react-router-dom';

import './CartContainer.css'

const CartContainer = () => {
  const {productCartList, clearProductCartList, getTotal} = useContext(CartContext);
  const [orderId, setOrderId] = useState(undefined);
  console.log(productCartList)

  const sendOrder = async(event)=>{
    const newOrder = {
      buyer:{
        name :"feli",
        phone :"25681463",
        email:"feli@gmail.com"
      },
      items: productCartList,
      total: 1250,
    };
    console.log(newOrder)
    const queryRef = collection(db,"orders");
    const response = await addDoc(queryRef,newOrder);
    console.log(response)
    setOrderId(response.id);
  }

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
          {/* <p>Su numero de pedido es {orderId}</p> */}
            {
              productCartList.map(product=>(
                <CartItem key={product.id} product={product}/>
              ))
            }
            <p className='cart-container-total'>Total: $ {getTotal()}</p>
            <hr/>
            <div className='cart-container-back-check'>
             <Link className='cart-container-link' to='/compra'><p className='cart-container-check'>Checkout</p></Link>
            </div>
          </>
          :
          <p>No has agregado productos</p>
        }
      </div>
    </div>
  )
}

export default CartContainer