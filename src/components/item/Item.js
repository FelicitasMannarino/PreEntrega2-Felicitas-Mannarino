import './Item.css';




import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = (props) =>{

    const {name,price,stock,id,image,category} = props.data

    return(
        <div className='card-box'>
            <div className='card'>
                <img className='card-img' src={image}></img>
                <div>
                    <h6 className='card-name'>{name}</h6>
                    <p className='card-price'>${price}</p>
                    <ItemCount stock={stock}/>
                    <Link to={`/productos/${name}/${id}`} className='card-link'>Ver detalles</Link>
                </div>
            </div>
        </div>
    )

}

export default Item

