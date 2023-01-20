import './ItemListContainer.css';



import ItemList from '../itemList/ItemList';





const ItemListContainer = (props) => {


 



     return(
         <div>
           <div className='categories'>
           <ul className='categories-list'>
             <li><button >Todos</button></li>
             <li><button >Aromas</button></li>
             <li><button >Cocina</button></li>
             <li><button >Mantas y almohadones</button></li>
             <li><button >Baño y laundry</button></li>
           </ul>
          </div>
          <p className='mensaje'>{props.greeting}, esperamos que encuentren lo que buscan</p>
          <ItemList/>
         
         </div>
     )

}

export default ItemListContainer