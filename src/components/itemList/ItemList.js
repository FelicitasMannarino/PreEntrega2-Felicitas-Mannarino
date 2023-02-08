import './ItemList.css'


import Item from '../item/Item'


const ItemList = ({productos}) => {

    return(
        <div>
        {productos.map((elem) => (
            <Item key={elem.id} {...elem} />
          ))}
        </div>
    )

}


export default ItemList









