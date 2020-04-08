import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './NavBurger.css'

const NavBurger = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='navBurger'>
      <Navbar className="header-men" light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-list-item" href="http://localhost:3000/games-section">Juegos</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-list-item" href="">Internacional</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-list-item" href="">Internacional</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-list-item" href="#home">Política</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-list-item" href="">Opinión</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-list-item" href="">Deportes</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-list-item" href="">Economía</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-list-item" href="">Local</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-list-item" href="">Gente</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-list-item" href="">Cultura</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-list-item" href="">Sucesos</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-list-item" href="">Temas</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBurger;