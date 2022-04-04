import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const useCartContext = () => {
    return useContext(CartContext);
}

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product, count) => {
        if(isOnCart(product.id) !== undefined){
            setCart(cart.map(element => {
                if(product.id === element.product.id){
                    return {...element, quantity: element.quantity + count}
                }
                return element;
            }))
        } else {
            setCart([...cart, {product, quantity: count}]);
        }
    }

    const removeFromCart = (e, id) => {
        e.preventDefault();
        setCart(cart.filter(element => element.product.id !== id));
    }

    const clearCart = () => {
        setCart([]);
    }

    const isOnCart = (id) => {
        return cart.find(element => element.product?.id === id);
    }

    return (
        <CartContext.Provider value={{cart, isOnCart, removeFromCart, addToCart, clearCart}}>{children}</CartContext.Provider>
    );
}

export default CartContextProvider;