import React, { useEffect, useState, createContext } from 'react';

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(()=> {
        console.log(cartProducts)
    }, [cartProducts])

    useEffect(()=> {
        console.log(totalQuantity)
    }, [totalQuantity])

    const setProduct = (product, quantity) => {

        const productExist = isInCart(product);

        if (productExist) {
            let repeatedProduct = cartProducts.find(element => element.item === product)
            repeatedProduct.quantity += quantity;
            
            let newCartProducts = cartProducts.filter( element => element.item !== product)
            setCartProducts([...newCartProducts, repeatedProduct]);
        } else {
            setCartProducts([...cartProducts, {item: product, quantity: quantity}])
        }

        countTotalQuantity()
    }

    const isInCart = (item) => {
        return cartProducts.some(product => product.item === item);
    }

    const countTotalQuantity = () => {
        let productsQuantity = 0;
        cartProducts.forEach(item => {
            setTotalQuantity(productsQuantity += item.quantity)
        })
        setTotalQuantity(productsQuantity)
    }

    return (
        <CartContext.Provider value={{ cartProducts, setProduct } }>
        { children }
        </CartContext.Provider>
    )
}