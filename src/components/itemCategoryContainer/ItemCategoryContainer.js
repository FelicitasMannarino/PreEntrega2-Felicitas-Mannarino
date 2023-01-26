import { useParams } from 'react-router-dom';

 import './ItemCategoryContainer.css';

 import ItemCategory from '../itemCategory/ItemCategory';


 const ItemCategoryContainer = () => {

    const {categoriaId} = useParams()

     return(
        <div>
            <ItemCategory categoria={categoriaId} />
        </div> 
       

     )
 }

 export default ItemCategoryContainer