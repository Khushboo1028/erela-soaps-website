import React from 'react';
import { IconContext } from 'react-icons';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<IconContext.Provider value={{ color: '#021C35' }}>
			<SidebarContainer isOpen={isOpen} onClick={toggle}>
				<Icon onClick={toggle}>
					<CloseIcon />
				</Icon>
				<SidebarWrapper>
					<SidebarMenu>
						<SidebarLink onClick={toggle} href="/">
							Home
						</SidebarLink>
						<SidebarLink onClick={toggle} href="/shop">
							Shop
						</SidebarLink>
						<SidebarLink onClick={toggle} href="/blog">
							Blog
						</SidebarLink>
						<SidebarLink onClick={toggle} href="/about">
							About
						</SidebarLink>
						<SidebarLink onClick={toggle} href="/contact">
							Contact
						</SidebarLink>
					</SidebarMenu>
				</SidebarWrapper>
			</SidebarContainer>
		</IconContext.Provider>
	);
};

export default Sidebar;
