import React from 'react';
import { createRoot } from 'react-dom/client';  // Correct import statement
import App from './App';

const root = createRoot(document.getElementById('root'));  // No need for ReactDOM here
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
