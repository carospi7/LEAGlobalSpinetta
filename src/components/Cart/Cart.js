import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartProducts, removeItem } = useContext(CartContext);

    const finalPrice = () => {
        let total = 0;
        cartProducts.forEach(product => {
            total += parseInt(product.item.price) * product.quantity
        });
        return total;
    }

    return(
        cartProducts.length === 0 ?
        <div className='cartEmpty'>
            <span>No se han encontrado items en el carrito de compras</span>
            <Link to={'/'}>Ver cursos</Link>
        </div>
        :
        <div className="cartList">
            <h1>Carrito</h1>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th className='productTitle'>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    { cartProducts.map((product) => {
                        return (
                            <tr key={ product.item.id }>
                                <td><button className='btnClear' onClick={() => { removeItem(product.item.id) }}>X</button></td>
                                <td><img src={product.item.pictureUrl} alt={ product.item.title }/></td>
                                <td><h3>{ product.item.title }</h3></td>
                                <td>{ product.item.price }</td>
                                <td>{ product.quantity }</td>
                                <td>{ parseInt(product.item.price) * product.quantity }</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            <div className='total'>Importe final <span>{ finalPrice() } USD</span><button>Finalizar compra</button></div>
        </div>
    )
}

export default Cart;