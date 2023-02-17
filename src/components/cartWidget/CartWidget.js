import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import './CartWidget.css';

const CardWidget = () => {

    const {getTotalProducts} = useContext(CartContext);

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