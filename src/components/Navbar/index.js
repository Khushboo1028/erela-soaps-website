import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = ({ toggle }) => {
	return (
		<IconContext.Provider value={{ color: '#021C35' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo href="/">
						<div>Erela Soaps</div>
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks href="/">Home</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks href="/shop">Shop</NavLinks>
						</NavItem>

						<NavItem>
							<NavLinks href="/blog">Blog</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks href="/about">About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks href="/contact">Contact</NavLinks>
						</NavItem>
					</NavMenu>

					{/* <NavBtn>
						<NavBtnLink to="/signin">Sign In</NavBtnLink>
					</NavBtn> */}
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
