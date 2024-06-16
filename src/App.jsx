import { Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

//Nav Bar
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

// Vistas
import Home from './views/Home.jsx';
import Pokemones from './views/Pokemones.jsx';
import Pokemon from './views/Pokemon.jsx';

function App() {
  const setClass = ({ isActive }) => (isActive ? 'active' : 'inactive');
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <nav>
            <NavLink className={setClass} to="/">
              Home
            </NavLink>
            {' - '}
            <NavLink className={setClass} to="/Pokemones">
              Pokemones
            </NavLink>
          </nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemones" element={<Pokemones />} />
        <Route path="/Pokemones/:id" element={<Pokemon />} />
      </Routes>
    </>
  );
}

export default App;
