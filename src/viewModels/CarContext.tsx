import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext({});

// @ts-ignore
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product: any, count: 1) => {
        // @ts-ignore
        setCart(current => {
            const index = current.findIndex((item: any) => item.id === product.id);
            if (index > -1) {
                const updatedCart = [...current];
                // @ts-ignore
                updatedCart[index].quantity += 1;
                return updatedCart;
            } else {
                return [...current, { ...product, quantity: count }];
            }
        });
    };

    const removeFromCart = (productId: number) => {
        setCart(current => current.filter((item: any) => item.id !== productId));
    };

    const updateQuantity = (productId: number, quantity: number) => {
        // @ts-ignore
        setCart(current => {
            return current.map((item: any) => {
                if (item.id === productId) {
                    return { ...item, quantity: quantity };
                }
                return item;
            }).filter(item => item.quantity > 0);
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;