//modulos
import { useState } from 'react'
//estilos
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const decrementar = ()=>{
        if(count>1){
            setCount(count-1)
        }
    }

    const incrementar = ()=>{
        if(count<stock){
            setCount(count+1)
        }
    }

    return(
      <div className='box-count'>
        <div className='box-count-children'>
           <div className='box-count-grandchild'>
            <button disabled={stock===0} onClick={decrementar}>-</button>
            <p className='count'>{count}</p>
            <button disabled={stock===0} onClick={incrementar}>+</button>
            <button disabled={stock === 0} onClick={()=>onAdd(count)}>Agregar al carrito</button>
           </div>
        </div>
      </div> 
    )
    
}

export default ItemCount