import './NotFound404.css'

import { Link } from 'react-router-dom';
import React from "react";

const NotFound404 = () => {
 
    return(
        <div className='not-found-box'>
            <h1>Error - 404</h1>
            <p>La pagina que estas buscando no existe.</p>
            <p>Quiza te interese ver nuestros <Link className='not-found-link' to="/productos">productos.</Link></p>
        </div>
        
    )
}

export default NotFound404