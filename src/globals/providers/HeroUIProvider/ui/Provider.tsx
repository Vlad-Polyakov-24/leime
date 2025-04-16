import type { ReactNode } from 'react';
import { HeroUIProvider } from '@heroui/react';

type ProviderProps = {
	children: ReactNode;
};

const Provider = ({ children }: ProviderProps) => (
	<HeroUIProvider>{children}</HeroUIProvider>
);

export default Provider;