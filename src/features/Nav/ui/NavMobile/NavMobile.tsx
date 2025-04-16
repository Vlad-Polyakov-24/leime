import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavbarMenu, NavbarMenuItem } from '@heroui/react';
import { classNames } from '@shared/lib/classNames';
import { navLinks } from '../../model/data/nav.data';

type NavMobileProps = {
	className?: string;
	onClose?: () => void;
};

const NavMobile = ({ className, onClose }: NavMobileProps) => {
	const pathname = usePathname();

	return (
		<NavbarMenu className={classNames('pt-4', {}, [className])}>
			{navLinks.map(({ link, label }, index) => (
				<NavbarMenuItem key={label} isActive={pathname === link}>
					<Link
						href={link}
						className={classNames('w-full block text-center', { 'text-primary': pathname === link }, [])}
						onClick={onClose}
					>
						{label}
					</Link>
				</NavbarMenuItem>
			))}
		</NavbarMenu>
	);
};

export default NavMobile;