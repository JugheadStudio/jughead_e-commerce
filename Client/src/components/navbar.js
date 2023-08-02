import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';

const UserMenu = (
  <Image
    src={'https://images-cdn.exchange.art/non_live_data/creator_data/fx2ccWDBMYN60nOnq5PhIcKVmM23/brands/JUGZ/avatar-539a591a-38cf-455f-bf23-dceb7bea74f9.image/png?optimize=low&auto=avifwebp'}
    alt="UserName profile image"
    roundedCircle
    style={{ width: '40px' }}
  />
)

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">JUGHEAD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            <div className='w-50 d-flex justify-content-end'>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#clothing">Clothing</Nav.Link>
              <Nav.Link href="#prints">Prints</Nav.Link>
              <Nav.Link href="#accessories">Accessories</Nav.Link>
            </div>

            <div className='w-50 d-flex justify-content-end'>
              <Dropdown>
                <Dropdown.Toggle className='btn-secondary'>
                  username
                  <img className='nav-profile-pic' src="https://images-cdn.exchange.art/non_live_data/creator_data/fx2ccWDBMYN60nOnq5PhIcKVmM23/brands/JUGZ/avatar-539a591a-38cf-455f-bf23-dceb7bea74f9.image/png?optimize=low&auto=avifwebp" alt="..."/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <NavDropdown id="nav-dropdown-dark-example" title={UserMenu}>
                <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
              </NavDropdown>
            </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;