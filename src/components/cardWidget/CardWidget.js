import './CardWidget.css';

const CardWidget = (props) => {

    return(
        <div className='box-card'>
         <i className='bi bi-bag'></i>
         <div className='cantidad'>
          <span>{props.cantidad}</span>
         </div>
        </div>
    )
    
}

export default CardWidget