import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavbarContent, NavbarItem } from '@heroui/react';
import { classNames } from '@shared/lib/classNames';
import { navLinks } from '../../model/data/nav.data';

type NavProps = {
	className?: string;
};

const Nav = ({ className }: NavProps) => {
	const pathname = usePathname();

	return (
		<NavbarContent className={classNames('hidden sm:flex gap-4 w-full', {}, [className])} justify={'center'}>
			{navLinks.map(({ link, label }) => (
				<NavbarItem key={label} isActive={pathname === link}>
					<Link
						href={link}
						color={'foreground'}
						className={classNames('hover:text-primary', { 'text-primary': pathname === link }, [])}>
						{label}
					</Link>
				</NavbarItem>
			))}
		</NavbarContent>
	);
};

export default Nav;