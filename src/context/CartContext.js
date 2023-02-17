import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const productosLocalStorage = JSON.parse(localStorage.getItem('carrrito') || '[]')


export const CartProvider = ({children})=>{

    const [productCartList, setProductCartList]= useState(productosLocalStorage);

    useEffect(()=>{
        localStorage.setItem('carrrito', JSON.stringify(productCartList))
    },[productCartList])


    const isInCart = (id)=>{
        const elementExists = productCartList.some((elemento)=>elemento.id === id);
        return elementExists;
    }

    const addProduct = (product, qty)=>{
        const newList = [...productCartList];

        if(isInCart(product.id)){
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + qty;
            newList[productIndex].totalPrice = newList[productIndex].quantity * newList[productIndex].price;
            setProductCartList(newList)
        } else{

            const newProduct={...product, quantity:qty, totalPrice: qty*product.price}

            const newList = [...productCartList];
            newList.push(newProduct);
            setProductCartList(newList);
        }
    }

    const removeProduct = (idProduct)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== idProduct);
        setProductCartList(newArray);
    }

    const clearProductCartList=()=>{
        setProductCartList([])
    }

    const getTotalProducts = ()=>{
        const totalProducts = productCartList.reduce((acc,product)=>acc + product.quantity,0);
        return totalProducts;
    }

    const getTotal = ()=>{
        const total = productCartList.reduce((acc,product)=>acc + product.quantity * product.price,0);
        return total;
    }


    return(
        <CartContext.Provider value={{productCartList,addProduct, removeProduct, clearProductCartList, isInCart, getTotalProducts, getTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider