import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CartProvider } from './context/cartcontext'; // ✅ Add this line

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> {/* ✅ Wrap App inside the provider */}
      <App />
    </CartProvider>
  </StrictMode>
);

