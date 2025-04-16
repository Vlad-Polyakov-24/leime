import { Button } from '@heroui/react';
import { type IMeme, MemeFields } from '@entities/Meme';

interface IProps {
	meme: IMeme;
	key: string | number;
	handleEdit: () => void;
}

export const getKeyValue = (props: IProps) => {
	const { meme, key, handleEdit } = props;

	if (key === 'actions') {
		return <Button size={'sm'} variant={'ghost'} onPress={handleEdit}>Edit</Button>;
	}

	if (key === MemeFields.IMAGE) {
		return (
			<a
				href={meme.image}
				target={'_blank'}
				rel={'noopener noreferrer'}
				className={'text-blue-500 underline hover:text-blue-700'}
			>
				{meme.image}
			</a>
		);
	}

	return meme[key as keyof IMeme] ?? '';
};