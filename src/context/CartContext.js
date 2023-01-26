import { useContext, createContext, useState } from "react";

export const CartContext = createContext([])

const useCartContext = () => (useContext(CartContext))

const CartProvider = () =>{

    const [items, setItems] = useState()

    const mostrarMensaje = () =>{
        
    }

    return(
        <></>
    )

}

export default CartProvider