import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({});

    return (
        <DataContext.Provider value={[globalState, setGlobalState]}>
            {children}
        </DataContext.Provider>
    );
};
