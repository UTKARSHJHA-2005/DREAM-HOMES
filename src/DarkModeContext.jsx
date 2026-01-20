import React, { createContext, useContext, useState } from 'react';

// Create a context
const DarkModeContext = createContext();

// Create a custom hook to use the DarkModeContext
export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  // Initialize DarkMode state (default is light mode, so DarkMode = false)
  const [DarkMode, setDarkMode] = useState(false);

  // Toggle dark mode state
  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  return (
    <DarkModeContext.Provider value={{ DarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
