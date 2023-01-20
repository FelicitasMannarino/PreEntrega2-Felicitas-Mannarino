//modulos
import { useState } from 'react'
//estilos
import './ItemCount.css';

const ItemCount = (props) => {
    const [count,setCount] = useState(1)

    const disOne = () =>{
        if(count > 1){
            setCount(count - 1)
        }
    }

    const addOne = () => {
        if(count < props.stock){
            setCount(count + 1)
        }
        
    }

    const onAdd = () =>{
        console.log(count);
    }

    return(
      <div className='box-count'>
        <div className='box-count-children'>
           <div className='box-count-grandchild'>
            <button onClick={disOne}>-</button>
            <p className='count'>{count}</p>
            <button onClick={addOne}>+</button>
           </div>
        </div>
        <div className='box-count-onadd' >
        <button  onClick={onAdd}>Agregar al carrito</button>
        </div>
      </div> 
    )
    
}

export default ItemCount