import * as React from 'react';
import { Reviews } from './Reviews';
import { Instragram } from './Instagram/instagram';

const HomePage: React.FC = () => {
  return (
    <div>
      <div>
        <h1>Vítejte</h1>
        <p>Vítejte….</p>
        <p>Tady bude asi nějaký úvodní odstavec o Áje jako co vyučuje a tak.</p>
      </div>
      <Instragram />
      <Reviews />
    </div>
  );
};

export default HomePage;
