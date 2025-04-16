'use client';

import { useState } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { MemeCard } from '@features/MemeCard';
import { Gallery } from '@features/Gallery';
import { useGetMemes } from '@entities/Meme';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => {
	const { data: memes } = useGetMemes({ enabled: true });
	const [slideIndex, setSlideIndex] = useState(-1);
	const slides = memes?.map(({ image }) => ({ src: image }));

	return (
		<>
			<section className={classNames('pt-5 pb-5 flex-grow', {}, [className])}>
				<Container>
					<ul className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'}>
						{memes?.sort((a, b) => a.title.localeCompare(b.title)).map((meme, i) => (
							<MemeCard key={meme.id} meme={meme} openGallery={() => setSlideIndex(i)} />
						))}
					</ul>
				</Container>
				{slides && <Gallery slides={slides} slideIndex={slideIndex} onClose={() => setSlideIndex(-1)} />}
			</section>
		</>
	);
};

export { SectionIntro };