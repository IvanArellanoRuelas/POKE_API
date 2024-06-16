import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  // uso el isActive de NavLink, asignar un valor a className en NavLink
  const setClass = ({ isActive }) => (isActive ? 'active' : 'inactive');
  return (
    <div>
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
    </div>
  );
}
