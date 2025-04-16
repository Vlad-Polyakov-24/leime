'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from '@shared/lib/classNames';
import { useDebouncedCallback } from '@shared/hooks/useDebouncedCallback';
import { Button } from '@heroui/react';
import { Icon, IconSize } from '@shared/ui/Icon';
import { useEditMeme } from '@entities/Meme';
import LikeIcon from '@shared/assets/icons/like.svg';
import DislikeIcon from '@shared/assets/icons/dislike.svg';

type MemeLikesProps = {
	className?: string;
	id: number;
	likes: number;
};

const MemeLikes = ({ className, id, likes }: MemeLikesProps) => {
	const { mutate: editMeme } = useEditMeme();
	const [clicks, setClicks] = useState(0);
	const clicksRef = useRef(0);

	useEffect(() => {
		clicksRef.current = clicks;
	}, [clicks]);

	const debouncedEdit = useDebouncedCallback(() => {
		if (clicksRef.current === 0) return;

		editMeme({ id, updatedFields: { likes: likes + clicksRef.current } });
		setClicks(0);
	}, 300);

	const changeLikes = useCallback((delta: number) => {
		const nextLikes = likes + clicksRef.current + delta;
		if (nextLikes < 0 || nextLikes > 99) return;

		setClicks((prev) => prev + delta);
		debouncedEdit();
	}, [likes, debouncedEdit]);

	return (
		<div className={classNames('flex justify-center items-center gap-4', {}, [className])}>
			<Button
				isIconOnly
				size={'sm'}
				aria-label={'Like'}
				color={'success'}
				onPress={() => changeLikes(1)}
			>
				<Icon icon={<LikeIcon />} size={IconSize.SIZE_20} />
			</Button>
			<span className={'font-bold'}>{likes + clicks}</span>
			<Button
				isIconOnly
				size={'sm'}
				aria-label={'Dislike'}
				color={'danger'}
				onPress={() => changeLikes(-1)}
			>
				<Icon icon={<DislikeIcon />} size={IconSize.SIZE_20} />
			</Button>
		</div>
	);
};

export { MemeLikes };