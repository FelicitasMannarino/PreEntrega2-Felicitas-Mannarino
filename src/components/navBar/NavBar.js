import './NavBar.css';
import CartWidget  from '../cartWidget/CartWidget.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
    return(
        <header>
          <nav className='navbar navbar-expand-lg'>
          <div className='container-fluid'>
             <Link className='title' id='title-big' to=" ">Vanilla</Link>
             <h6 className='title' id='title-small'>Deco&Hogar</h6>
             <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target=' navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
             <span className='navbar-toggler-icon'></span>
             </button>
             <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='list navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link className='nav-link nav-us' aria-current='page' to='/'>Inicio</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to="/nosotros">Nosotros</Link>
                </li> 
                <li>
                 <Link className='nav-link' to="/contacto">Contacto</Link>
                </li>
                <li>
                 <Link className='nav-link' to="/productos" >Productos</Link>
                </li>
               </ul>
            </div>
          </div>
          <Link className='nav-cart' to="/cart"><CartWidget/></Link>
        </nav> 
        </header>
    )

}

export default Navbar