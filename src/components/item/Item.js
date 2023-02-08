import './Item.css';


import ItemCount from '../itemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Item = ({name,price,stock,id,image}) =>{
    
    const [cantidad, setCantidad] = useState(0)

    const tomarCantidad = (numero) =>{
    setCantidad(numero)
    }

    const onAdd = () =>{
        console.log(`una cantidad de ${cantidad} y el precio total es ${cantidad * price}`);
    }
    

    return(

         <Row xs={1} md={4} className="g-4">
         {Array.from({ length: 4 }).map((_, idx) => (
           <Col>
             <Card>
               <Card.Img variant="top" src={image} />
               <Card.Body>
                 <Card.Title>{name}</Card.Title>
                 <Card.Text>
                   This is a longer card with supporting text below as a natural
                   lead-in to additional content. This content is a little bit
              
                 </Card.Text>
               </Card.Body>
             </Card>
           </Col>
         ))}
       </Row>
    )

}

export default Item

