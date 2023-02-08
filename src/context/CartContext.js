import { useContext, createContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () => { return useContext(CartContext) }

const CartProvider = ({children}) =>{

    const [items, setItems] = useState([])

    console.log(items);

    const amountItems = () =>{
        return items.length
    }

    const addItem = (data) =>{
        if (isInCart(data.id)) {
            alert("El producto ya esta en el carrito.")
        }else{
            const currentList = items
            currentList.push(data)
            setItems(currentList)
            console.log(items);
        }
    }

    const removeItem = (id) =>{
        const newList = items.filter(e => e.id !== id)
        setItems(newList)
    }

    const clearCart = () =>{
        setItems([])
    }

    const isInCart = (id) =>{
        if(items.find(e => e.id === id)){
            return true
        }else{
            return false
        }
    }

    return(
        <CartContext.Provider value={{items, addItem}}>
         {children}
        </CartContext.Provider>
    )

}

export default CartProvider