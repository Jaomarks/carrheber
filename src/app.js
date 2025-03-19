import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CarList from './components/carlist';
import CarDetails from './components/cardetails';
import Register from './components/register';
import Login from './components/login';

const socket = io('http://localhost:5000');

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (token) {
      axios.get('http://localhost:5000/cars').then(res => setCars(res.data));

      socket.on('carUpdated', (updatedCars) => {
        setCars(updatedCars);
      });

      return () => socket.disconnect();
    }
  }, [token]);

  const handleLogin = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setCars([]);
  };

  return (
    <Router>
      <nav>
        {token ? (
          <>
            <button onClick={handleLogout}>Logout</button>
            <Link to="/">Carros</Link>
          </>
        ) : (
          <>
            <Link to="/register">Registrar</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {token && (
          <>
            <Route path="/" element={<CarList cars={cars} />} />
            <Route path="/car/:licensePlate" element={<CarDetails />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
