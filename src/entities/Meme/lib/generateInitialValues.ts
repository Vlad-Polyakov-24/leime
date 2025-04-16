import { IMeme, MemeFields } from '../model/types/Meme.types';

export const generateInitialValues = (meme?: IMeme | null) => ({
	[MemeFields.TITLE]: meme?.title || '',
	[MemeFields.IMAGE]: meme?.image || '',
	[MemeFields.LIKES]: meme?.likes || 0,
});