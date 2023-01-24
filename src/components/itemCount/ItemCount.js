//modulos
import { useState } from 'react'
//estilos
import './ItemCount.css';

const ItemCount = (props) => {
    const [count,setCount] = useState(0)

    const disOne = () =>{
        if(count > 0){
            setCount(count - 1)

            props.cantidades(count)
        }
    }

    const addOne = () => {
        if(count < props.stock){
            setCount(count + 1)

            props.cantidades(count)
        }
        
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
      </div> 
    )
    
}

export default ItemCount