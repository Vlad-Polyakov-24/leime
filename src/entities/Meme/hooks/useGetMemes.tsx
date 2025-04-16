'use client';

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { errorHandler } from '@shared/lib/errorHandler';
import { memeKeys } from '../model/const/memeKeys';
import { memeApi } from '../api/memeApi';

type UseGetCampProps = {
	enabled?: boolean;
}

const useGetMemes = ({ enabled = true }: UseGetCampProps) => {
	const { data, isLoading, isSuccess, isError, error } = useQuery({
		queryKey: memeKeys.allMemes,
		queryFn: memeApi.getMemes,
		retry: 1,
		enabled,
	});

	useEffect(() => {
		if (isError) {
			errorHandler(error);
		}
	}, [isError, error]);

	return { data, isLoading, isSuccess, isError };
};

export { useGetMemes };