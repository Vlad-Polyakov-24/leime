import { Button } from '@heroui/react';
import { Icon, IconSize } from '@shared/ui/Icon';
import { type IMeme, MemeFields } from '@entities/Meme';
import TrashIcon from '@shared/assets/icons/trash.svg';

interface IProps {
	meme: IMeme;
	key: string | number;
	handleEdit: () => void;
	handleDelete: () => void;
}

export const getKeyValue = (props: IProps) => {
	const { meme, key, handleEdit, handleDelete } = props;

	if (key === 'actions') {
		return (
			<div className={'flex items-center gap-2'}>
				<Button size={'sm'} variant={'ghost'} onPress={handleEdit}>Edit</Button>
				<Button
					isIconOnly
					size={'sm'}
					aria-label={'Trash'}
					color={'danger'}
					onPress={handleDelete}
				>
					<Icon icon={<TrashIcon />} size={IconSize.SIZE_16} />
				</Button>
			</div>
		);
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