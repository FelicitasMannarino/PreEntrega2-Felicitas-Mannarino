// import { useEffect, useState } from 'react';
// import './ItemCategory.css';
// import Item from '../item/Item';
// import { Link,useParams } from 'react-router-dom';

// const ItemCategory = () => {

//      const [categoria,setCategoria] = useState([])
//      const {category} = useParams()

//      useEffect(()=>{
//      fetch("../../misProductos.json")
//      .then(res=> res.json())
//      .then(json => {
//         if(category){
//             setCategoria(json.filter((item)=>item.category === category))
//         }else{
//             setCategoria(json)
//         }
//      });

     
//     },[category])

//     return(
//        <div><Link to={`/productos/${category}`} >Aromas</Link> {categoria}</div> 
       

//     )
// }

// export default ItemCategory