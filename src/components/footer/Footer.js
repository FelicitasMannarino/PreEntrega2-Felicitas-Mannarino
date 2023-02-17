import './Footer.css';

const Footer = (props) => {
    return(
        <div className='footer'> 
          <p className='footer-top'>lorem</p>    
          <ul>
            <li><a href='https://www.instagram.com/user/' target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a></li>
            <li><a href='https://es-la.facebook.com/' target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a></li>
            <li><a href='https://ar.pinterest.com/' target="_blank" rel="noopener noreferrer"><i className="bi bi-pinterest"></i></a></li>
          </ul>
          <div className='footer-copy'>
            <p>Copyright Vanilla Deco&Hogar - 2023</p>
            <p>Todos los derechos reservados.</p>
          </div>
          <p>Defensa de las y los consumidores. Para reclamos <a href='https://autogestion.produccion.gob.ar/consumidores' target="_blank" rel="noopener noreferrer">ingrese aqui.</a></p>
          <p className='footer-me'>Sitio web desarrollado por Felicitas Mannarino.</p>
        </div>
    )
}

export default Footer