import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import ShopContextProvider from './context/ShopContext';
import { CartProvider } from 'react-use-cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ShopContextProvider>
  </React.StrictMode>
);

