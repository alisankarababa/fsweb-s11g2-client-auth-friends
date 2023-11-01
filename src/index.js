import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthenticationProvider from './contexts/AuthenticationContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <AuthenticationProvider>
            <App />
        </AuthenticationProvider>
    </BrowserRouter>
);
