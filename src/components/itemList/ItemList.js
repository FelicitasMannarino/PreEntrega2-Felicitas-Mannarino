import { useState, useEffect} from 'react'


import './ItemList.css'


import Item from '../item/Item'



const ItemList = (props) => {
 
    const [productos,setProductos] = useState([])

useEffect(()=>{
    fetch('../../misProductos.json')
.then(res=>res.json())
.then(json => setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos}/>)))
},[])
   





    return(
        
        <div >

            {productos}
        </div>
        
    )

}


export default ItemList









