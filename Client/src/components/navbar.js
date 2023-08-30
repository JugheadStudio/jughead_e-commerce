import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import JugheadLogo from "../jughead-logo-primary.svg";

import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function Navigation() {

  const navigate = useNavigate(); // Get the navigate function

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/"><img src={JugheadLogo} alt="Jughead Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            <div className='w-100 d-flex justify-content-center navbar-links'>
              <NavLink to="/" className='nav-link'>Home</NavLink>
              <NavLink to="/clothing" className='nav-link'>Clothing</NavLink>
              <NavLink to="/prints" className='nav-link'>Prints</NavLink>
            </div>

            {/* cart */}
            <div className='ml-auto'>
              <button className='user-dropdown'>
                <span className='login-user-nav'>Cart</span>
              </button>
            </div>

            <div className='ml-auto'>
              <button className='user-dropdown'>
                <span className='login-user-nav'>Connect</span>
              </button>
            </div>

            <div className='ml-auto'>
              <Dropdown>
                <Dropdown.Toggle className='user-dropdown'>
                  <span className='login-user-nav'>username</span>
                  <img className='nav-profile-pic' src="https://images-cdn.exchange.art/non_live_data/creator_data/fx2ccWDBMYN60nOnq5PhIcKVmM23/brands/JUGZ/avatar-539a591a-38cf-455f-bf23-dceb7bea74f9.image/png?optimize=low&auto=avifwebp" alt="..." />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className='d-flex dropdown-user'>
                    <div className='dropdown-profile-pic'>
                      <img src="https://images-cdn.exchange.art/non_live_data/creator_data/fx2ccWDBMYN60nOnq5PhIcKVmM23/brands/JUGZ/avatar-539a591a-38cf-455f-bf23-dceb7bea74f9.image/png?optimize=low&auto=avifwebp" alt="..." />
                    </div>
                    <div className='dropdown-username'>
                      <h4 className='m-0 bold'>Jugz</h4>
                      <a href="/">View Profile</a>
                    </div>
                  </div>

                  <div className='navbar-dropdown-links'>
                    <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <NavLink to="/admin" className='nav-link'>Admin</NavLink>
                    </Dropdown.Item>

                    <NavLink to="/login" className="dropdown-item" onClick={handleLogout}>
                      Log Out
                    </NavLink>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;