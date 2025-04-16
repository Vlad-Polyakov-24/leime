import { useMutation, useQueryClient } from '@tanstack/react-query';
import { errorHandler } from '@shared/lib/errorHandler';
import { memeKeys } from '../model/const/memeKeys';
import { memeApi } from '../api/memeApi';
import type { IMeme } from '../model/types/Meme.types';

const useDeleteMeme = () => {
	const queryClient = useQueryClient();

	const { mutate, isPending, isSuccess, isError } = useMutation({
		mutationFn: memeApi.deleteMeme,
		onMutate: async (id: number) => {
			await queryClient.cancelQueries({ queryKey: memeKeys.allMemes });

			const previousMemes = queryClient.getQueryData<IMeme[]>(memeKeys.allMemes);

			queryClient.setQueryData<IMeme[]>(memeKeys.allMemes, (oldMemes) => {
				if (!oldMemes) return oldMemes;

				return oldMemes.filter((meme) => meme.id !== id);
			});

			return { previousMemes };
		},
		onError: (error, _, context) => {
			if (context?.previousMemes) {
				queryClient.setQueryData(memeKeys.allMemes, context.previousMemes);
			}

			errorHandler(error);
		},
		onSettled: () => queryClient.invalidateQueries({ queryKey: memeKeys.allMemes }),
	});

	return { mutate, isPending, isSuccess, isError };
};

export { useDeleteMeme };