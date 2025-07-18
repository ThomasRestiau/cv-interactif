import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

// le div #root est dans index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
