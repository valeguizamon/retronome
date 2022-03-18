import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const useCartContext = () => {
    return useContext(CartContext);
}

const CartContextProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const addToCart = (producto, count) => {
        console.log("producto", producto)
        if(isOnCart(producto.id) !== undefined){
            setCarrito(carrito.map(elemento => {
                if(producto.id === elemento.producto.id){
                    return {...elemento, cantidad: elemento.cantidad + count}
                }
                return elemento;
            }))
        } else {
            console.log("No existe en el carrito");
            setCarrito([...carrito, {producto, cantidad: count}]);
            console.log(carrito);
        }

    }

    const removeFromCart = (e, id) => {
        e.preventDefault();
        setCarrito(carrito.filter(elemento => elemento.producto.id !== id));
    }

    const clearCart = () => {
        setCarrito([]);
    }

    const isOnCart = (id) => {
        return carrito.find(elemento => elemento.producto?.id === id);
    }

    //const isInCart = (cart, identifier) => (cart.find( el => el.item?.uid === identifier) !== undefined);

    return (
        <CartContext.Provider value={{carrito, isOnCart, removeFromCart, addToCart, clearCart}}>{children}</CartContext.Provider>
    );
}

export default CartContextProvider;