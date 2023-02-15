import './ItemDetail.css'

import ItemCount from '../itemCount/ItemCount' 
import { useState } from 'react'
import { useContext } from 'react';
import {CartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom';


const ItemDetail = ({product}) => {

    const {addProduct} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    const onAdd = (count)=>{
        addProduct(product,count);
        setQuantity(count);
    }


    return (

        <div className='detail'>
            <div className='detail-container'>
            <img src={product.image} alt='producto' />
            <div className='detail-text'>
            <h2>{product.name}</h2>
            <p className='detail-price'>$ {product.price}</p>
            <p className='detail-description'>{product.description}</p>
            </div>
            </div>
              <div  className='box-count'>
              <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
              </div>

        </div>

    )

}


export default ItemDetail