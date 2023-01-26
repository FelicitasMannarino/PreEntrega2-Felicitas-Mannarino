
import './ItemListContainer.css';



import ItemList from '../itemList/ItemList';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';





const ItemListContainer = (props) => {

  const {categoriaId} = useParams()

  const [productos,setProductos] = useState([])

  const getProductsByCategory= (id) => {
    fetch('/misProductos.json')
    .then(res=>res.json())
    .then(json=>
    setProductos(json.filter(el => el.category === id))
  )
  }

  const getProducts = () => {
    fetch('/misProductos.json')
    .then(res=>res.json())
    .then(json=>
    setProductos(json)
  )
  }

  useEffect(() => {
    if(categoriaId){
    getProductsByCategory(categoriaId)
    }else {
    getProducts()
    }
  }, [categoriaId])

  console.log(productos);


  return(
    <div>
      <div className='categories'>
        <ul className='categories-list'>
          <li><Link className='category-link' to="/productos">Todos</Link></li>
          <li><Link className='category-link' to="/categoria/Aromas" >Aromas</Link></li>
          <li><Link className='category-link' to="/categoria/Cocina">Cocina</Link></li>
          <li><Link className='category-link' to="/categoria/Baño y laundry">Baño y laundry</Link></li>
          <li><Link className='category-link' to="/categoria/Mantas y almohadones ">Mantas y almohadones</Link></li>
        </ul>
      </div>
      <p className='mensaje'>{props.greeting}, esperamos que encuentren lo que buscan</p>
      <ItemList productos={productos}/>
    </div>

)

}

export default ItemListContainer