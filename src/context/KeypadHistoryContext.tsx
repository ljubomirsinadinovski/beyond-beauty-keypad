import { createContext, useContext, useEffect, useState } from 'react';

interface KeypadHistoryContextType {
  entries: string[];
  addEntry: (entry: string) => void;
  resetEntries: () => void;
}

type ProviderProps = {
  children: React.ReactNode;
};

const KeypadHistoryContext = createContext<KeypadHistoryContextType>({
  entries: [],
  addEntry: () => null,
  resetEntries: () => null,
});

const LOCAL_KEY: string = 'historyEntreis' as const;

export const KeypadHistroyProvider = ({ children }: ProviderProps) => {

  const getInitialState = () => {
    const historyEntries = localStorage.getItem(LOCAL_KEY);
    return historyEntries ? JSON.parse(historyEntries) : [];
  };
  
  const [historyEntries, setHistroryEntries] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(historyEntries));
  }, [historyEntries]);

  const addEntry = (entry: string) => {
    setHistroryEntries((current: string[]) => {
      return [entry, ...current]
    })
  };

  const resetEntries = () => {
    setHistroryEntries([]);
  };

  const value: KeypadHistoryContextType = {
    entries: historyEntries,
    addEntry,
    resetEntries,
  };

  return (
    <KeypadHistoryContext.Provider value={value}>
      {children}
    </KeypadHistoryContext.Provider>
  );
};

export const useKeypadHistory = () => useContext(KeypadHistoryContext);
