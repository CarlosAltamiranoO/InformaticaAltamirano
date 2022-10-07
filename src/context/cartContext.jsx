import React, { useState, createContext } from "react";

const cartContext = createContext();

export default function CartContextProvider({children}){
    const [cart, setCart] = useState([]);

    function addItem(item, count){

        const newItem = {...item, count}
        if(isInCart(newItem.id)){

            const findProd = cart.find(x => x.id === newItem.id);
            const findProdIndex = cart.indexOf(findProd);
            const auxArray = [...cart];
            auxArray[findProdIndex].count += count;
            setCart(auxArray);
        }
        else{
            setCart([...cart, newItem]);
        }
        /* console.log("datos:",item, count ); */
        
    }
    function isInCart(id){
        let found = cart.some((item) => item.id === id);
        return found;
    }
    function empyCart(){
        setCart([]);
    }
    function getItemQty () {
        return cart.reduce((acc, x) => acc += x.count, 0);
    }
    return(
        <cartContext.Provider value={{ cart, addItem, empyCart, getItemQty }}>{children}</cartContext.Provider>
    )
}
export {cartContext}