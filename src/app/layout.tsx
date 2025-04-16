import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from '@globals/providers/ErrorBoundary';
import { HeroUIProvider } from '@globals/providers/HeroUIProvider';
import { ReactQueryProvider } from '@globals/providers/ReactQuery';
import '@globals/styles/index.scss';

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
	title: 'LEIME',
	description: 'Developed by Vlad Poliakov',
	icons: {
		icon: '/favicon.ico',
	},
};

interface IRootLayout {
	children: ReactNode;
}

const RootLayout = async ({ children }: IRootLayout) => (
	<html lang={'en'}>
	<body className={roboto.variable}>
	<HeroUIProvider>
		<ErrorBoundary>
			<ReactQueryProvider>
				{children}
				<ToastContainer />
			</ReactQueryProvider>
		</ErrorBoundary>
	</HeroUIProvider>
	</body>
	</html>
);

export default RootLayout;
