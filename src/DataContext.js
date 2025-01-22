import React, { createContext, useContext, useState } from 'react';

// Kreiraj kontekst
const DataContext = createContext();

// Kreiraj provider komponentu
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]); // Podaci iz API-ja

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook za korištenje konteksta
export const useDataContext = () => {
  return useContext(DataContext);
};
