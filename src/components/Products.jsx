import classes from '../styles/Products.module.css';

import minus from '../assets/icon-minus.svg';
import plus from '../assets/icon-plus.svg';
import cartLogo from '../assets/black-cart.svg';

import { currencyFormatter } from '../util/formatter';
import { CartContext } from '../store/ShoppingCartContext';

import { useContext } from 'react';

const Products = () => {
    // const addItemToCart = () => {
    //     setItems((prevItems) => ({ ...prevItems, quantity: counter, totalPrice: items.price * counter }));
    // };

    // const removeItemFromCart = () => {
    //     setItems((prevItems) => ({ ...prevItems, quantity: 0, totalPrice: 0 }));
    // };

    const { increaseItem, decreaseItem, addItemToCart, items } = useContext(CartContext);

    return (
        <div id={classes.products}>
            <h3>sneaker company</h3>
            <h1>{items.name}</h1>
            <p>
                These low-profile sneaker are your perfect casual wear companion. Featuring a durable rubber outer sole,
                they&apos;ll withstand everything the weather can offer.
            </p>
            <div className={classes.pricing}>
                <h2>
                    {currencyFormatter.format(items.price)}
                    <span>50%</span>
                </h2>
                <p>$250.00</p>
            </div>
            <div className={classes.actions}>
                <div className={classes.counters}>
                    <button onClick={decreaseItem} disabled={items.counter === 0}>
                        <img src={minus} alt="minus" />
                    </button>
                    <span>{items.counter}</span>
                    <button onClick={increaseItem}>
                        <img src={plus} alt="plus" />
                    </button>
                </div>
                <div className={classes.cartBtn}>
                    <button onClick={addItemToCart}>
                        <img src={cartLogo} alt="" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Products;
