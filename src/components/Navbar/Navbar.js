import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,

} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/pokemons' activeStyle>
            Pokemons
          </NavLink>
          <NavLink to='/types' activeStyle>
            Types
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;