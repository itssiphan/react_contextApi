import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [bird, setBird] = useState("Parrot");

  const contextValue = { bird, setBird };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}
