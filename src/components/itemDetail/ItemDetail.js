import './ItemDetail.css'

import ItemCount from '../itemCount/ItemCount' 




const ItemDetail = (props) => {

    const {name,price,image,description,stock} = props.data

    return (

        <div className='detail'>
             <h3 className='detail-name'>{name}</h3>
             <img className='detail-img' src={image}></img>
             <div className='detail-body'>
             <h6 className='detail-price'>${price}</h6>
             <p>{description}</p>
             <ItemCount stock={stock}/>
            </div>
            
        </div>

        


    )

}


export default ItemDetail