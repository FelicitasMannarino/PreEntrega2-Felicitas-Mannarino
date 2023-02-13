import './ItemDetail.css'

import ItemCount from '../itemCount/ItemCount' 
import { useState } from 'react'
import {useCartContext} from '../../context/CartContext'






const ItemDetail = (props) => {

    const {addItem} = useCartContext()

    const [amount, setAmount] = useState(0)

    const {name,price,image,description,stock,id,category} = props.data


    const takeAmount = (number) =>{
    setAmount(number)
    }

     const onAdd = () =>{

        if (amount !== 0) {
            const product = {
                id:id,
                name:name,
                category:category,
                price:price,
                count:amount,
            }
            addItem(product)
        }else{
            alert("Tenes 0 productos seleccionados.")
        }
     }


    return (

        <div className='detail'>
            <div className='detail-container'>
            <img src={image} alt='producto' />
            <div className='detail-text'>
            <h2>{name}</h2>
            <p className='detail-price'>$ {price}</p>
            <p className='detail-description'>{description}</p>
            </div>
            </div>
              <div  className='box-count'>
               <ItemCount stock={stock} amounts={takeAmount}/>
               <div className='box-count-onadd'>
                <button onClick={onAdd}>Agregar al carrito</button>
               </div>
              </div>

        </div>

    )

}


export default ItemDetail