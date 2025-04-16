import type { ReactNode } from 'react';
import { Header } from '@widgets/Header';

interface IPagesLayoutProps {
	children: ReactNode;
}

const PagesLayout = async ({ children }: IPagesLayoutProps) => (
	<>
		<Header />
		<main className={'main'}>{children}</main>
	</>
);

export default PagesLayout;
