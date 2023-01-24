import { useState, useEffect} from 'react'


import './ItemList.css'


import Item from '../item/Item'
import { useParams } from 'react-router-dom'



const ItemList = (props) => {
 
    const [productos,setProductos] = useState([])

    const {categoriaId} = useParams()

useEffect(()=>{
    if(categoriaId != null){
        fetch(`../../misProductos.json/products/category/${categoriaId}`)
        .then(res=>res.json())
        .then(json=>setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos}/>)))
    }else{
        fetch('../../misProductos.json')
        .then(res=>res.json())
        .then(json => setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos}/>)))
    }

},[])


   





    return(
        
        <div >

            {productos}
        </div>
        
    )

}


export default ItemList









