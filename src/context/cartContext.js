import React, { useState, createContext } from 'react';

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0)

    const setProduct = (product, quantity) => {
        const productExist = isInCart(product);

        if (productExist) {
            let repeatedProduct = cartProducts.find(element => element.item.id === product.id)
            repeatedProduct.quantity += quantity;
            
            let newCartProducts = cartProducts.filter(element => element.item.id !== product.id)
            setCartProducts([...newCartProducts, repeatedProduct]);
        } else {
            setCartProducts([...cartProducts, {item: product, quantity: quantity}])
        }

        cartProducts.length >= 1 && countTotalQuantity()
    }

    const isInCart = (item) => {
        return cartProducts.some(product => product.item.id === item.id);
    }

    const countTotalQuantity = () => {
        let productsQuantity = 0;
        cartProducts.forEach(product => {
            productsQuantity += product.quantity;
        })
        setTotalQuantity(productsQuantity)
    }

    const removeItem = (id) => {
        const newArray = cartProducts.filter(product => product.item.id !== id)
        setCartProducts(newArray);
    }

    const clearCart = () => {
        setCartProducts([]);
    }

    return (
        <CartContext.Provider value={{ cartProducts, setProduct, totalQuantity, removeItem, clearCart } }>
        { children }
        </CartContext.Provider>
    )
}