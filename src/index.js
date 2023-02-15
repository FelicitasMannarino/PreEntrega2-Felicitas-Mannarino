import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import CartProvider from './context/CartContext';

import NavBar from './components/navBar/NavBar.js';
import Home from './components/home/Home.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.js';
import AboutUs from './components/aboutUs/AboutUs';
import Contact from './components/contact/Contact.js';
import CartContainer from './components/cartContainer/CartContainer';
import Footer from './components/footer/Footer.js';
import NotFound404 from './components/notFound404/NotFound404.js';

import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <CartProvider>
     <BrowserRouter>
      <NavBar/>
       <Routes>
        <Route exact path='/' element={<Home situation="Inicio"/>}/>
        <Route exact path='/productos' element={<ItemListContainer situation="Productos"/>}/>
        <Route exact path='/productos/:productoName/:productoId' element={<ItemDetailContainer/>}/>
        <Route exact path='/productos/:categoriaId' element={<ItemListContainer/>}/>
        <Route exact path='/nosotros' element={<AboutUs situation="Nosotros"/>}/>
        <Route exact path='/contacto' element={<Contact situation="Contacto"/>}/>
        <Route exact path='/cart' element={<CartContainer/>} />
        <Route exact path='*' element={<NotFound404/>}/>
       </Routes>
      <Footer/>
     </BrowserRouter>
    </CartProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();