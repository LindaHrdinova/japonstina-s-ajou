import { useState } from 'react';
import { Reviews } from './components/Reviews';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>Vítejte….</p>
        <p>Tady bude asi nějaký úvodní odstavec o Áje jako co vyučuje a tak.</p>
        <p>Japonština s Ájou na Instagramu</p>
      </div>
      <Reviews />
    </>
  );
}

export default App;
