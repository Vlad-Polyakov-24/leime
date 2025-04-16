import { MemeFields } from '../types/Meme.types';

type Inputs = {
	name: MemeFields.TITLE | MemeFields.IMAGE | MemeFields.LIKES;
	label: string;
	type?: string;
};

export const inputs: Inputs[] = [
	{
		name: MemeFields.TITLE,
		label: 'Title',
	},
	{
		name: MemeFields.IMAGE,
		label: 'Image URL',
	},
	{
		name: MemeFields.LIKES,
		label: 'Likes',
		type: 'number',
	},
];