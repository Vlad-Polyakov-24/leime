'use client';

import type { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '../config/queryClient';

type ReactQueryProps = {
	children: ReactNode;
	isDevtools?: boolean;
};

const ReactQuery = ({ children, isDevtools = true }: ReactQueryProps) => (
	<QueryClientProvider client={queryClient}>
		{children}
		{isDevtools && (
			<ReactQueryDevtools initialIsOpen={false} buttonPosition={'bottom-right'} />
		)}
	</QueryClientProvider>
);

export default ReactQuery;