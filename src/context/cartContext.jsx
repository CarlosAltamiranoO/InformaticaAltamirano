import React, { useState, createContext } from "react";

const cartContext = createContext();

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addItem(item, count) {

        const newItem = { ...item, count }
        if (isInCart(newItem.id)) {

            const findProd = cart.find(x => x.id === newItem.id);
            const findProdIndex = cart.indexOf(findProd);
            const auxArray = [...cart];
            auxArray[findProdIndex].count += count;
            setCart(auxArray);
        }
        else {
            setCart([...cart, newItem]);
        }

    }
    function isEmpty() {
        return cart.length === 0;

    }
    function isInCart(id) {
        let found = cart.some((item) => item.id === id);
        return found;
    }
    function empyCart() {
        setCart([]);
    }
    function getItemQty() {
        return cart.reduce((acc, x) => acc += x.count, 0);
    }
    function totalPrise() {
        return cart.reduce((acc, item) => acc += item.prise * item.count, 0);
    }
    function totalProduct(id) {
        let aux = cart.find((element) => element.id === id);
        return aux.prise * aux.count;
    }


    function removeItem(id) {
        return setCart(cart.filter((item) => item.id !== id));
    }
    return (
        <cartContext.Provider value={{ cart, isEmpty, addItem, empyCart, getItemQty, removeItem, totalPrise, totalProduct }}>{children}</cartContext.Provider>
    )

}
export { cartContext }