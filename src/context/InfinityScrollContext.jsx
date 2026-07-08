import React, { createContext, useContext, useState, useCallback } from 'react';

const defaultCtx = {
  activeIdx: 0,
  setActiveIdx: () => {},
};

const InfinityScrollContext = createContext(defaultCtx);

export const InfinityScrollProvider = ({ children }) => {
  const [activeIdx, setActiveIdxState] = useState(0);

  // Stable setter — only triggers re-render if index actually changed
  const setActiveIdx = useCallback((idx) => {
    setActiveIdxState(prev => (prev === idx ? prev : idx));
  }, []);

  return (
    <InfinityScrollContext.Provider value={{ activeIdx, setActiveIdx }}>
      {children}
    </InfinityScrollContext.Provider>
  );
};

export const useInfinityScroll = () => useContext(InfinityScrollContext);

export default InfinityScrollContext;
