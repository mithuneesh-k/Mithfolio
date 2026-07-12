import React, { createContext, useContext, useState } from 'react';

const InfinityModeContext = createContext();

export const InfinityModeProvider = ({ children }) => {
  const [isInfinityMode, setIsInfinityMode] = useState(false);
  const toggleInfinityMode = () => setIsInfinityMode(prev => !prev);

  return (
    <InfinityModeContext.Provider value={{ isInfinityMode, toggleInfinityMode }}>
      {children}
    </InfinityModeContext.Provider>
  );
};

export const useInfinityMode = () => useContext(InfinityModeContext);
