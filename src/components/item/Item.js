import './Item.css';


import ItemCount from '../itemCount/ItemCount';
import { useState } from 'react';
import { useContext } from 'react';
import {CartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const Item = ({product}) =>{
    
  const {addProduct} = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const onAdd = (count)=>{
      addProduct(product,count);
      setQuantity(count);
  }
    

    return(
           <Col>
             <Card className='card-box'>
               <Card.Img className='card-img' variant="top" src={product.image} />
               <Card.Body>
                 <Card.Title className='card-name'>{product.name}</Card.Title>
                 <Card.Text>
                  <p className='card-price'>$ {product.price}</p>
                  <div  className='box-count'>
                   <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                  </div>
                  <p className='card-details'><Link to={`/productos/${product.name}/${product.id}`} className='card-link'>Ver detalles</Link></p>
                 </Card.Text>
               </Card.Body>
             </Card>
           </Col>

    )

}

export default Item

