import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './components/component/landing';
import { AdminDashboard } from './components/component/admin-dashboard';
import { Login } from './components/component/login';
import { Register } from './components/component/register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
export default App;