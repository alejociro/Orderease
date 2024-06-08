import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext({});

// @ts-ignore
export const OrderProvider = ({ children }) => {
    const [orderActive, setOrderActive] = useState(null);

    return (
        <OrderContext.Provider value={{ orderActive, setOrderActive }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => {
    const context = useContext(OrderContext);
    if (context === undefined) {
        throw new Error('useOrder debe ser usado dentro de un OrderProvider');
    }
    return context;
};
