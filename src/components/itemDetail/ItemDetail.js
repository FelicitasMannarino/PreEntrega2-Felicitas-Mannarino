import './ItemDetail.css'

import ItemCount from '../itemCount/ItemCount' 
import { useState } from 'react'





const ItemDetail = (props) => {

    const [cantidad, setCantidad] = useState(0)

    const {name,price,image,description,stock} = props.data

    const tomarCantidad = (numero) =>{
    setCantidad(numero)
    }

    const onAdd = () =>{
        console.log(`una cantidad de ${cantidad} y el precio total es ${cantidad * price}`);
    }


    return (

        <div className='detail'>
             <h3 className='detail-name'>{name}</h3>
             <img className='detail-img' alt=' ' src={image}></img>
             <div className='detail-body'>
             <h6 className='detail-price'>${price}</h6>
             <p>{description}</p>
             <div  className='box-count'>
             <ItemCount stock={stock} cantidades={tomarCantidad}/>
             <div className='box-count-onadd'>
             <button  onClick={onAdd}>Agregar al carrito</button>
             </div>
             </div>
            </div>
            
        </div>

        


    )

}


export default ItemDetail