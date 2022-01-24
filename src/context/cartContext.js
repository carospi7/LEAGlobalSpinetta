import React, { useState, createContext } from 'react';

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0)

    const setProduct = (product, quantity) => {
        const productExist = isInCart(product);

        if (productExist) {
            let repeatedProduct = cartProducts.find(element => element.item.id === product.id)
            setTotalQuantity(repeatedProduct.quantity += quantity);
            
            let newCartProducts = cartProducts.filter(element => element.item.id !== product.id)
            setCartProducts([...newCartProducts, repeatedProduct]);
        } else {
            setCartProducts([...cartProducts, {item: product, quantity: quantity}])
            cartProducts.length === 0 ? setTotalQuantity(quantity) : countAllProductsQuantity(quantity)
        }
    }

    const isInCart = (item) => {
        return cartProducts.some(product => product.item.id === item.id);
    }

    const countAllProductsQuantity = (quantity) => {
        let productsQuantity = 0;
        cartProducts.forEach(product => {
            productsQuantity = productsQuantity + product.quantity;
        })
        setTotalQuantity(productsQuantity + quantity)
    }

    const removeItem = (id) => {
        const itemSelected = cartProducts.filter(product => product.item.id === id);
        const newArray = cartProducts.filter(product => product.item.id !== id)
        const newQuantity = totalQuantity - itemSelected[0].quantity; 
        setCartProducts(newArray);
        setTotalQuantity(newQuantity);
    }

    const clearCart = () => {
        setCartProducts([]);
        setTotalQuantity(0);
    }

    return (
        <CartContext.Provider value={{ cartProducts, setProduct, totalQuantity, removeItem, clearCart } }>
        { children }
        </CartContext.Provider>
    )
}