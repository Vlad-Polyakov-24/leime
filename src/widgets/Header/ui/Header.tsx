'use client';

import { useState } from 'react';
import { Navbar, NavbarMenuToggle } from '@heroui/react';
import { Nav, NavMobile } from '@features/Nav';

type HeaderProps = {
	className?: string;
};

const Header = ({ className }: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className={className}>
			<NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className={'sm:hidden'} />
			<Nav />
			<NavMobile onClose={() => setIsMenuOpen(false)} />
		</Navbar>
	);
};

export default Header;