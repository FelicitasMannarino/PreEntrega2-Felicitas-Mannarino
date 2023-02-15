import './CartWidget.css';

import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



const CardWidget = () => {

    const {getTotalProducts, productCartList} = useContext(CartContext);

    return(
        <div className='box-card'>

         <i className='bi bi-bag cart-widget'></i>
         <div className='cantidad'>
          <span>{getTotalProducts()}</span>
         </div>

        </div>
    )
    
}

export default CardWidget