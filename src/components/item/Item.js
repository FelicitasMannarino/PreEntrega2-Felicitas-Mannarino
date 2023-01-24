import './Item.css';


import ItemCount from '../itemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = (props) =>{
    
    const [cantidad, setCantidad] = useState(0)

    const {name,price,stock,id,image} = props.data

    const tomarCantidad = (numero) =>{
    setCantidad(numero)
    }

    const onAdd = () =>{
        console.log(`una cantidad de ${cantidad} y el precio total es ${cantidad * price}`);
    }
    

    return(
        <div className='card-box'>
            <div className='card'>
                <img className='card-img' alt=' ' src={image}></img>
                <div>
                    <h6 className='card-name'>{name}</h6>
                    <p className='card-price'>${price}</p>
                    <div  className='box-count'>
                    <ItemCount stock={stock} cantidades={tomarCantidad}/>
                    <div className='box-count-onadd'>
                    <button  onClick={onAdd}>Agregar al carrito</button>
                    </div>
                    </div>
                    <Link to={`/productos/${name}/${id}`} className='card-link'>Ver detalles</Link>
                </div>
            </div>
        </div>
    )

}

export default Item

