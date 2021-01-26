import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = ({ toggle }) => {
	return (
		<IconContext.Provider value={{ color: '#021C35' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<div>Erela Soaps</div>
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="/">Home</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/shop">Shop</NavLinks>
						</NavItem>

						<NavItem>
							<NavLinks to="/blog">Blog</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/about">About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/contact">Contact</NavLinks>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
