import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import Container from './components/common/Container';
import { routes } from './routes';
import { ThemeProvider } from '@mui/system';
import React from 'react';
import { createTheme } from '@mui/material';
import { createContext } from 'react';
import { useState } from 'react';
import globalTheme from './theme';

export const DarkModeContext = createContext()
function App() {
  const [darkMode, setDarkMode] = useState(false)
  const contextValue = {
    darkMode,
    setMode: (mode) => {
      setDarkMode(mode)
    }
  }
  const theme = React.useMemo(
    () =>
      createTheme({
        ...globalTheme,
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: "#96DAE4",
            dark: '#6D70C6'
          },
          secondary: {
            main: "#F3F4ED",
            dark: '#536162'
          },
          success: {
            main: "#CDEEAA",
            dark: '#219F94'
          },
          error: {
            main: '#FF9292',
            dark: '#FF6363'
          }
        },
      }),
    [darkMode],
  );
  return (
    <DarkModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <div className="App dark:text-gray-300">
          <Header />
          <Container>
            <Routes>
              {routes.map(([element, path], index) =>
                <Route key={index} element={element} path={path} />
              )}
            </Routes>
          </Container>
        </div>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}

export default App;
