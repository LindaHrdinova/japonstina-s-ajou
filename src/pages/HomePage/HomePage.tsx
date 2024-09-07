import * as React from 'react';
import { Reviews } from './Reviews';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Vítejte</h1>
      <div>
        <p>Vítejte….</p>
        <p>Tady bude asi nějaký úvodní odstavec o Áje jako co vyučuje a tak.</p>
        <p>Japonština s Ájou na Instagramu</p>
      </div>
      <Reviews />
    </div>
  );
};

export default HomePage;
