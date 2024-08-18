import classes from '../styles/Cart.module.css';

import Modal from '../UI/Modal';
import { CartContext } from '../store/ShoppingCartContext';
import { UserProgressContext } from '../store/UserProgressContext';
import CartItem from './CartItem';

import { useContext } from 'react';

const Cart = () => {
    const { items } = useContext(CartContext);
    const { progress, hideCart } = useContext(UserProgressContext);

    function handleCloseCart() {
        hideCart();
    }

    return (
        <Modal
            className={classes.cart}
            open={progress === 'cart'}
            onClose={progress === 'cart' ? handleCloseCart : null}
        >
            <h2>Cart</h2>
            {items.quantity === 0 ? <p className={classes.empty}>Your cart is empty.</p> : <CartItem item={items} />}
            <div className={classes.cartActions}>
                <button onClick={handleCloseCart} className={classes.close}>
                    close
                </button>
                {items.quantity > 0 && (
                    <button onClick={handleCloseCart} className={classes.checkout}>
                        checkout
                    </button>
                )}
            </div>
        </Modal>
    );
};
export default Cart;
