import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import { db } from '../../services/firebase/firebase';
import { addDoc, collection, Timestamp, doc, writeBatch, getDoc } from 'firebase/firestore';

const Cart = () => {
    const [buyer, setBuyer] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const { cartProducts, removeItem } = useContext(CartContext);

    const finalPrice = () => {
        let total = 0;
        cartProducts.forEach(product => {
            total += parseInt(product.item.price) * product.quantity
        });
        return total;
    }

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const objOrder = {
            items: {
                cartProducts,
                date: Timestamp.fromDate(new Date()),
                total: finalPrice()
            },
            buyer
        }

        const batch = writeBatch(db);
        const outOfStock = [];

        objOrder.items.cartProducts.forEach((product) => {
            getDoc(doc(db, 'items', product.item.id)).then((documentSnapshot) => {
                if(documentSnapshot.data().stock >= product.quantity){
                    batch.update(doc(db, 'items', documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - product.quantity
                    })
                    console.log('hay stock')
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data()})
                    console.log('no hay stock')
                }
            })
        })

        if (outOfStock.length === 0){
            addDoc(collection(db, 'orders'), objOrder).then(({id}) => {
                batch.commit().then(() => {
                    console.log('Se generó la orden correctamente, el id es ' + id)
                })  
            })
        }


        //ejemplo de update
        // updateDoc(doc(db, 'orders', '2rTh1H1cudhxfqCEbvBR'), { total: 1000 })
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
            <div className='total'>Importe final <span>{ finalPrice() } USD</span></div>
            <form className="userData" onSubmit={ handleSubmit }>
                <label>Nombre<input type="text" name="name" onChange={ handleChange }/></label>
                <label>Teléfono<input type="text" name="phone" onChange={ handleChange }/></label>
                <label>Email<input type="email" name="email" onChange={ handleChange }/></label>
                <input type="submit" value="Finalizar compra" className='btnFinish'/>
            </form>
        </div>
    )
}

export default Cart;