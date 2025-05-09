import { createContext, useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types'

const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'dark' : 'light')
    });
  }, [])

  const toggleTheme = () => {
    setThemeName((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

 // Memoize the context value so it doesn't change unnecessarily
 const value = useMemo(() => [{ themeName, toggleTheme }], [themeName]);

 return (
   <ThemeContext.Provider value={value}>
     {children}
   </ThemeContext.Provider>
 );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeContext, ThemeProvider };
