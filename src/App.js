import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home'
import Cart from './Components/Cart'
import { CartProvider } from './Components/CartContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
      <Router>
      <div className="App">
        <Navbar setMode={setMode} mode={mode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
          </Routes>
      </div>
      </Router>
      </CartProvider>
    </ThemeProvider>
  )
}
export default App; 