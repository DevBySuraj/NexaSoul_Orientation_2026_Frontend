import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { RegisterPage } from './pages/RegisterPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  if (currentPath === '/register') {
    return <RegisterPage />;
  }

  return <Home />;
}
