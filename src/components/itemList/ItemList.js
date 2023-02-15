import './ItemList.css'


import Item from '../item/Item'
import Row from 'react-bootstrap/Row';


const ItemList = ({productos}) => {

    return(
        <div>
            <Row xs={1} md={4} className="g-4">
            {
                productos.map(producto=>(
                <Item key={producto.id} product={producto}/>
                ))
            }
          </Row>
        </div>
    )

}


export default ItemList









