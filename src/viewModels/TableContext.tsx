import React, { createContext, useState, useContext } from 'react';

const TableContext = createContext({});

// @ts-ignore
export const TableProvider = ({ children }) => {
    const [selectedTable, setSelectedTable] = useState(null);

    return (
        <TableContext.Provider value={{ selectedTable, setSelectedTable }}>
            {children}
        </TableContext.Provider>
    );
};

export const useTable = () => {
    const context = useContext(TableContext);
    if (context === undefined) {
        throw new Error('useTable debe ser usado dentro de un TableProvider');
    }
    return context;
};
