import { supabase, supabaseTables } from '@shared/config/supabase/supabase';
import { type IMeme, MemeFields } from '../model/types/Meme.types';

export const memeApi = {
	getMemes: async (): Promise<IMeme[]> => {
		const { data, error } = await supabase
			.from(supabaseTables.MEMES)
			.select('*')

		if (error) {
			throw new Error(error.message);
		}

		return data;
	},
	editMeme: async (id: number, updatedFields: Partial<Omit<IMeme, MemeFields.ID>>) => {
		const { data, error } = await supabase
			.from(supabaseTables.MEMES)
			.update(updatedFields)
			.eq('id', id)
			.select()
			.single();

		if (error) {
			throw new Error(error.message);
		}

		return data;
	},
};