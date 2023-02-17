import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {doc, getDoc} from 'firebase/firestore';
import { db } from '../../services/firebase';

import './ItemDetailContainer.css';
import ItemDetail from '../itemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const { productoId } = useParams()
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([])

    useEffect(()=>{
        setTimeout(()=>{
        const getProducto = async()=>{
            const queryRef = doc(db, "listaProductos",productoId);
            const response = await getDoc(queryRef);
            const newDoc = {
                id:response.id,
                ...response.data()
            }
            console.log(newDoc)
            setProduct(newDoc);
            setLoading(false);
        }
        getProducto();
    },0)
    },[productoId])

    return(
        <div>
          {loading === true ?
            <div class="loading show">
              <div class="spin"></div>
            </div>
            :
            <ItemDetail product={product}/>
          }
        </div>
    )
}

export default ItemDetailContainer