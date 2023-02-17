import './Contact.css';

const Contact = (props) =>{
    return(
        <div>
          <div className='contact'>
            <ul>
              <li><h4>Contactanos</h4></li>
              <li><i class="bi bi-telephone"></i> Llamar: 077 009 0046</li>
              <li><i class="bi bi-envelope"></i> Email: info@vanilla.com.ar</li>
              <li><i class="bi bi-geo-alt"></i><a href='https://www.oca.com.ar/Busquedas/Envios' target="_blank" rel="noopener noreferrer"> Segui tu orden</a></li>
            </ul>
            <ul>
              <li><h4>Horarios de atencion:</h4></li>
              <li>Lunes-Viernes: 8:00AM-10:00PM</li>
              <li>Sabados: 9:00AM-3:00AM</li>
            </ul>
          </div>
          <div className='situation'><p>{props.situation}</p></div>
        </div>
    )
}

export default Contact