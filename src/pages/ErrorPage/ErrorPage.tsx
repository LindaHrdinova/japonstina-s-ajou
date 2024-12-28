import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Navigation } from '../../components/Navigation';

const ErrorPage: React.FC = () => {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <div>
          <h2>404: Tady nic není</h2>
          <p>Asi jste se spletli</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
