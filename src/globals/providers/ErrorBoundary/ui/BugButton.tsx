'use client';

import { useEffect, useState } from 'react';
import { Button } from '@heroui/react';

export const BugButton = () => {
	const [error, setError] = useState(false);

	const onThrow = () => setError(true);

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);

	return <Button onPress={onThrow} size={'lg'} color={'danger'}>throw error</Button>;
};
