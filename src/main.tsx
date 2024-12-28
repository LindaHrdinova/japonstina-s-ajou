import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { Header } from './components/Header/index.tsx';
import { Footer } from './components/Footer/index.tsx';
import { Navigation } from './components/Navigation/index.tsx';

import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import AboutPage from './pages/AboutPage/AboutPage.tsx';
import CoursesPage from './pages/CoursesPage/CoursesPage.tsx';
import ContactPage from './pages/ContactPage/ContactPage.tsx';
import TermsAndConditions from './pages/TermsAndConditions/Terms and Conditions.tsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.tsx';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Navigation />
      <main>
        <div className="mainDiv">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      {
        path: '/o-mne',
        element: <AboutPage />,
      },
      {
        path: '/kurzy',
        element: <CoursesPage />,
      },
      {
        path: '/kontakty',
        element: <ContactPage />,
      },
      {
        path: '/obchodni-podminky',
        element: <TermsAndConditions />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
