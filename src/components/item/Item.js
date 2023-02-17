import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import './Item.css';

const Item = ({product}) =>{
    

    return(
          <Link to={`/productos/${product.name}/${product.id}`}>
            <Col>
              <Card className='card-box'>
               <Card.Img className='card-img' variant="top" src={product.image} />
               <Card.Body>
                 <Card.Title className='card-name'>{product.name}</Card.Title>
                 <Card.Text>
                   <p className='card-price'>$ {product.price}</p>
                   <p className='card-details'><Link to={`/productos/${product.name}/${product.id}`} className='card-link'>Ver detalles</Link></p>
                 </Card.Text>
               </Card.Body>
               </Card>
             </Col>
           </Link>

    )

}

export default Item

