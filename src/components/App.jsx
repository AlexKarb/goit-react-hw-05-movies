import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';

export const App = () => (
  <>
    <Header />
    <main>
      <Suspense fallback={''}>
        <Outlet />
      </Suspense>
    </main>
  </>
);
