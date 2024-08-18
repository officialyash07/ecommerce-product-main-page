/* eslint-disable react/prop-types */
import classes from '../styles/CartItem.module.css';

import thumb from '../../public/image-product-1-thumbnail.jpg';
import del from '../assets/icon-delete.svg';

import { CartContext } from '../store/ShoppingCartContext';

import { useContext } from 'react';

import { currencyFormatter } from '../util/formatter';

const CartItem = ({ item }) => {
    const { removeItemFromCart } = useContext(CartContext);

    return (
        <div id={classes.cartItem}>
            <div className={classes.cartImage}>
                <img src={thumb} alt="" />
            </div>
            <div className={classes.cartContent}>
                <p>{item.name}</p>
                <p>
                    {currencyFormatter.format(item.price)} x {item.quantity}{' '}
                    <span>{currencyFormatter.format(item.totalPrice)}</span>
                </p>
            </div>
            <button onClick={removeItemFromCart}>
                <img src={del} alt="" />
            </button>
        </div>
    );
};
export default CartItem;
