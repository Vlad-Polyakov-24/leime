import { useMutation, useQueryClient } from '@tanstack/react-query';
import { errorHandler } from '@shared/lib/errorHandler';
import { memeKeys } from '../model/const/memeKeys';
import { memeApi } from '../api/memeApi';

const useCreateMeme = () => {
	const queryClient = useQueryClient();

	const { mutate, mutateAsync, isPending, isSuccess, isError } = useMutation({
		mutationFn: memeApi.createMeme,
		onError: (error) => errorHandler(error),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: memeKeys.allMemes }),
	});

	return { mutate, mutateAsync, isPending, isSuccess, isError };
};

export { useCreateMeme };