import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NotificationProvider } from './Hooks/NotificationProvider';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <NotificationProvider >
    <App />
    
  </NotificationProvider>
  </BrowserRouter>
);
