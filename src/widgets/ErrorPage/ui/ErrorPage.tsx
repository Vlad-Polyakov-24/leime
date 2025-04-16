import { Button } from '@heroui/react';

const ErrorPage = () => {

	const reloadPage = () => {
		location.reload();
	};

	return (
		<section className={'not-found-page'}>
			<h1>Oops, something&#39;s wrong!</h1>
			<Button onPress={reloadPage} size={'lg'} color={'primary'}>Refresh</Button>
		</section>
	);
};

export { ErrorPage };
