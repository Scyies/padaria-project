import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';

import './styles/reset.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
