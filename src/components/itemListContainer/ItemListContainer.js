import ItemList from '../itemList/ItemList';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

import './ItemListContainer.css';

const ItemListContainer = (props) => {

  const {categoriaId} = useParams()

  const [loading, setLoading] = useState(true);
  const [productos,setProductos] = useState([])


  useEffect(() => {
    setTimeout(()=>{
    const getData = async () =>{
      const queryRef = categoriaId ? query(collection(db, "listaProductos"), where("category","==",categoriaId)) : collection(db, "listaProductos");
      const response = await getDocs(queryRef);
      const docsInfo = response.docs.map(doc=>{
         const newDoc = {
          id:doc.id,
          ...doc.data()
       }
       return newDoc
      });
      setProductos(docsInfo);
      setLoading(false);
    }
    getData();
  },0)
  }, [categoriaId])


  return(
    <div>
      <div className='categories'>
        <ul className='categories-list'>
          <li><Link className='category-link' to="/productos">Todos</Link></li>
          <li><Link className='category-link' to="/productos/Aromas" >Aromas</Link></li>
          <li><Link className='category-link' to="/productos/Cocina">Cocina</Link></li>
          <li><Link className='category-link' to="/productos/Baño y laundry">Baño y laundry</Link></li>
          <li><Link className='category-link' to="/productos/Mantas y almohadones ">Mantas y almohadones</Link></li>
        </ul>
      </div>

      {loading === true ?
        <div class="loading show">
          <div class="spin"></div>
        </div>
            :
      <ItemList productos={productos}/>
      }
      
      <div className='situation'><p>{props.situation}</p></div>
    </div>

)

}

export default ItemListContainer