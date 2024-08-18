import Header from './components/Header';
import ProductImages from './components/ProductImages';
import Products from './components/Products';
import { CartContextProvider } from './store/ShoppingCartContext';
import { UserProgressContextProvider } from './store/UserProgressContext';
import Cart from './components/Cart';

function App() {
    return (
        <UserProgressContextProvider>
            <CartContextProvider>
                <Header />
                <Cart />
                <main>
                    <ProductImages />
                    <Products />
                </main>
            </CartContextProvider>
        </UserProgressContextProvider>
    );
}

export default App;
