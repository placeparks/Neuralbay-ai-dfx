import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./globals.css";
import { AuthProvider } from '../context/AuthContext';
import Header from '../components/header';
import Footer from '../components/footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>,
);