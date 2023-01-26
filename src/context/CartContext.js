import { useContext, createContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () => { return useContext(CartContext) }

const CartProvider = ({children}) =>{

    const [items, setItems] = useState()

    console.log(items);

    const addItem = (data) =>{
        const listaActual = items
        listaActual.push(data)
        setItems(listaActual)
        console.log(items);
    }

    return(
        <CartContext.Provider value={{items, addItem}}>
         {children}
        </CartContext.Provider>
    )

}

export default CartProvider