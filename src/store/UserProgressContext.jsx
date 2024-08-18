/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCarousel: () => {},
    hideCarousel: () => {},
});

export function UserProgressContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState('');

    function showCart() {
        setUserProgress('cart');
    }

    function hideCart() {
        setUserProgress('');
    }

    function showCarousel() {
        setUserProgress('carousel');
    }

    function hideCarousel() {
        setUserProgress('');
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCarousel,
        hideCarousel,
    };

    return <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>;
}
