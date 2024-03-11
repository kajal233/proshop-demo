import React from 'react'
import { Navbar, Nav, Container, NavbarBrand, NavbarToggle, NavbarCollapse, NavLink } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <NavbarBrand >
              <img src={logo} alt='ProShop' />
              ProShop
            </NavbarBrand>
          </LinkContainer>

          <NavbarToggle area-controls='basic-navbar-nav' />
          <NavbarCollapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <NavLink><FaShoppingCart />Cart</NavLink>
              </LinkContainer>
              <LinkContainer to='/login'>
                <NavLink ><FaUser />Sign In</NavLink>
              </LinkContainer>
            </Nav>
          </NavbarCollapse>
        </Container>


      </Navbar>
    </header>
  )
}

export default Header