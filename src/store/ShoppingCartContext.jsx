/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';

export const CartContext = createContext({
    items: { name: 'fall limited edition sneakers', price: 125, quantity: 0, totalPrice: 0, counter: 0 },
    increaseItem: () => {},
    decreaseItem: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {},
});

const shoppingCartReducer = (state, action) => {
    if (action.type === 'INCREASE') {
        const updatedItems = { ...state.items };
        updatedItems.counter = updatedItems.counter + 1;
        return { ...state, items: updatedItems };
    }

    if (action.type === 'DECREASE') {
        const updatedItems = { ...state.items };
        updatedItems.counter = updatedItems.counter - 1;
        return { ...state, items: updatedItems };
    }

    if (action.type === 'ADD_ITEM') {
        const updatedItems = { ...state.items };
        updatedItems.quantity = state.items.counter;
        updatedItems.totalPrice = state.items.price * updatedItems.quantity;
        return { ...state, items: updatedItems };
    }

    if (action.type === 'REMOVE_ITEM') {
        const updatedItems = { ...state.items };
        updatedItems.quantity = 0;
        updatedItems.totalPrice = 0;
        return { ...state, items: updatedItems };
    }

    return state;
};

export function CartContextProvider({ children }) {
    const [shoppingCartState, dispatchCartState] = useReducer(shoppingCartReducer, {
        items: { name: 'fall limited edition sneakers', price: 125, quantity: 0, totalPrice: 0, counter: 0 },
    });

    const handleIncreaseItem = () => {
        dispatchCartState({
            type: 'INCREASE',
        });
    };

    const handleDecreaseItem = () => {
        dispatchCartState({
            type: 'DECREASE',
        });
    };

    const handleAddItemToCart = () => {
        dispatchCartState({
            type: 'ADD_ITEM',
        });
    };

    const handleRemoveItemFromCart = () => {
        dispatchCartState({
            type: 'REMOVE_ITEM',
        });
    };

    const ctxValue = {
        items: shoppingCartState.items,
        increaseItem: handleIncreaseItem,
        decreaseItem: handleDecreaseItem,
        addItemToCart: handleAddItemToCart,
        removeItemFromCart: handleRemoveItemFromCart,
    };

    return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>;
}
