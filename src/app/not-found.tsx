import Link from 'next/link';
import { Button } from '@heroui/react';
import { Routes } from '@shared/config/navigation/routes';

const NotFound = () => (
	<div className={'not-found-page'}>
		<h1>Page not found</h1>
		<Button as={Link} href={Routes.HOME} color={'primary'} size={'lg'}>Home page</Button>
	</div>
);

export default NotFound;