import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './components/component/landing';
import { AdminDashboard } from './components/component/admin-dashboard';
import { Login } from './components/component/login';
import { Register } from './components/component/register';
import { NotFound } from './components/component/not-found';
import { Navigate } from 'react-router';
import { useEffect, useState } from 'react';
import { ReactNode } from 'react';
import { login, logout } from './app/slices/authSlice';
import { useDispatch } from 'react-redux';

const App = () => {
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function AuthRouteWrapper({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
      const verifyAuth = async () => {
        try {
          const response = await fetch('http://localhost:8080/api/checkAuth', {
            credentials: 'include',
          });
          if (response.ok) {
            const data = await response.json();
            dispatch(login(data));
            setIsAuthenticated(true);
          } else {
            dispatch(logout());
            setIsAuthenticated(false);
          }
        } catch (error) {
          console.error('Auth check failed:', error);
          dispatch(logout());
          setIsAuthenticated(false);
        }
      };
  
      verifyAuth();
    }, [dispatch]);

    if (isAuthenticated === null) {
      return <div>Loading...</div>;
    }
  
    return isAuthenticated ? children : <Navigate to="/login" />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;