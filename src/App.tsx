import { Reviews } from './components/Reviews';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/index.tsx';
import { Footer } from './components/Footer/index.tsx';
import { Navigation } from './components/Navigation/index.tsx';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <div>
        <p>Vítejte….</p>
        <p>Tady bude asi nějaký úvodní odstavec o Áje jako co vyučuje a tak.</p>
        <p>Japonština s Ájou na Instagramu</p>
      </div>
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
