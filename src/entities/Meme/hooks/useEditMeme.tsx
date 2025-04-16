'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { errorHandler } from '@shared/lib/errorHandler';
import { memeKeys } from '../model/const/memeKeys';
import { memeApi } from '../api/memeApi';
import { type IMeme, MemeFields } from '../model/types/Meme.types';

const useEditMeme = () => {
	const queryClient = useQueryClient();

	const { mutate, mutateAsync, isPending, isSuccess, isError } = useMutation({
		mutationFn: ({ id, updatedFields }: { id: number; updatedFields: Partial<Omit<IMeme, MemeFields.ID>> }) =>
			memeApi.editMeme(id, updatedFields),
		onMutate: async ({ id, updatedFields }) => {
			await queryClient.cancelQueries({ queryKey: memeKeys.allMemes });

			const previousMemes = queryClient.getQueryData<IMeme[]>(memeKeys.allMemes);

			queryClient.setQueryData<IMeme[]>(memeKeys.allMemes, (oldMemes) => {
				if (!oldMemes) return [];

				return oldMemes.map((meme) =>
					meme.id === id ? { ...meme, ...updatedFields } : meme
				);
			});

			return { previousMemes };
		},
		onError: (error, _, context) => {
			if (context?.previousMemes) {
				queryClient.setQueryData(memeKeys.allMemes, context.previousMemes);
			}
			errorHandler(error);
		},
	});

	return { mutate, mutateAsync, isPending, isSuccess, isError };
};

export { useEditMeme };