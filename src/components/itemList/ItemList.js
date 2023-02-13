import './ItemList.css'


import Item from '../item/Item'
import Row from 'react-bootstrap/Row';


const ItemList = ({productos}) => {

    return(
        <div>
            <Row xs={1} md={4} className="g-4">
        {productos.map((elem) => (
            <Item key={elem.id} {...elem} />
          ))}
          </Row>
        </div>
    )

}


export default ItemList









