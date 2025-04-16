import { MemeFields } from '@entities/Meme';

export const columns = [
	{
		key: MemeFields.ID,
		label: 'ID',
	},
	{
		key: MemeFields.TITLE,
		label: 'Title',
	},
	{
		key: MemeFields.IMAGE,
		label: 'URL',
	},
	{
		key: MemeFields.LIKES,
		label: 'Likes',
	},
	{
		key: 'actions',
		label: 'Actions',
	},
];