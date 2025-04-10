
import { Nav, NavItem, NavLink, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navigation.css";

function MyNavbar() {
  return (
          <Nav
            className="Navigation-Bar" // Apply flexbox to center the nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            
            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink}>Buy</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Hello there!</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink}>Sell</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Hello there!</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink}>Rent</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Hello there!</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item>
              <Nav.Link href="/home">**Insert Name Here**</Nav.Link>
            </Nav.Item>

            
          </Nav>
       
  );
}

export default MyNavbar;