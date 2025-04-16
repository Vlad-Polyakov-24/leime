'use client';

import { Button } from '@heroui/react';

const Error = ({ reset }: { reset: () => void }) => (
	<div className={'not-found-page'}>
		<h1>Oops, something&#39;s wrong!</h1>
		<Button onPress={reset} size={'lg'} color={'primary'}>Refresh the page</Button>
	</div>
);

export default Error;