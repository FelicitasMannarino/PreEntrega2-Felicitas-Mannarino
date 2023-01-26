import './ItemDetail.css'

import ItemCount from '../itemCount/ItemCount' 
import { useState } from 'react'
import {useCartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'





const ItemDetail = (props) => {

    const {addItem} = useCartContext()

    const [cantidad, setCantidad] = useState(0)

    const {name,price,image,description,stock,id,category} = props.data


    const tomarCantidad = (numero) =>{
    setCantidad(numero)
    }

     const onAdd = () =>{
        const product = {
            id:id,
            name:name,
            category:category,
            price:price,
            count:cantidad,
        }
        addItem(product)
     }


    return (

        <div className='detail'>
             <p><Link to="/">{props.situation}</Link></p>
             <h3 className='detail-name'>{name}</h3>
             <img className='detail-img' alt=' ' src={image}></img>
             <div className='detail-body'>
              <h6 className='detail-price'>${price}</h6>
              <p>{description}</p>
              <div  className='box-count'>
               <ItemCount stock={stock} cantidades={tomarCantidad}/>
               <div className='box-count-onadd'>
                <button onClick={onAdd}>Agregar al carrito</button>
               </div>
              </div>
             </div>
        </div>

        


    )

}


export default ItemDetail