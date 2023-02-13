import './Item.css';


import ItemCount from '../itemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Item = ({name,price,stock,id,image}) =>{
    
    const [cantidad, setCantidad] = useState(0)

    const tomarCantidad = (numero) =>{
    setCantidad(numero)
    }

    const onAdd = () =>{
        console.log(`una cantidad de ${cantidad} y el precio total es ${cantidad * price}`);
    }
    

    return(
           <Col>
             <Card className='card-box'>
               <Card.Img className='card-img' variant="top" src={image} />
               <Card.Body>
                 <Card.Title className='card-name'>{name}</Card.Title>
                 <Card.Text>
                  <p className='card-price'>$ {price}</p>
                  <div  className='box-count'>
                  <ItemCount stock={stock} cantidades={tomarCantidad}/>
                  <div className='box-count-onadd'>
                  <button  onClick={onAdd}>Agregar al carrito</button>
                  </div>
                  </div>
                  <p className='card-details'><Link to={`/productos/${name}/${id}`} className='card-link'>Ver detalles</Link></p>
                 </Card.Text>
               </Card.Body>
             </Card>
           </Col>

        // <div className='container'>
        // <div className='row'>
        // <div className='col-3'>
        // <div className='card-box'>
        //     <div className='card'>
        //         <img className='card-img' alt='producto' src={image}></img>
        //         <div>
        //             <h6 className='card-name'>{name}</h6>
        //             <p className='card-price'>${price}</p>
        //             <div  className='box-count'>
        //             <ItemCount stock={stock} cantidades={tomarCantidad}/>
        //             <div className='box-count-onadd'>
        //             <button  onClick={onAdd}>Agregar al carrito</button>
        //             </div>
        //             </div>
        //             <p className='card-details'><Link to={`/productos/${name}/${id}`} className='card-link'>Ver detalles</Link></p>
        //         </div>
        //     </div>
        // </div>
        // </div>
        // </div>
        // </div>
    )

}

export default Item

