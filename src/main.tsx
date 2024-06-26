import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Navigation } from './components/Navigation/index.tsx';
import { Header } from './components/Header/index.tsx';
import { Footer } from './components/Footer/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Navigation />
    <App />
    <Footer />
  </React.StrictMode>,
);
