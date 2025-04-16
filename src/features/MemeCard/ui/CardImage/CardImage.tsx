import Image from 'next/image';
import { useState } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Loader } from '@shared/ui/Loader';

type CardImageProps = {
	className?: string;
	src: string;
	alt: string;
	openGallery?: () => void;
};

const CardImage = (props: CardImageProps) => {
	const { className, src, alt, openGallery } = props;
	const [loading, setLoading] = useState(true);

	return (
		<div className={classNames('relative w-full h-[200px]', {}, [className])}>
			{loading && <Loader absolute />}
			<Image
				priority
				alt={alt}
				className={'object-cover rounded-xl w-full h-full transition-shadow duration-200 cursor-pointer hover:drop-shadow-lg'}
				src={src}
				width={0}
				height={0}
				sizes={'(max-width: 768px) 100vw, 33vw'}
				onClick={openGallery}
				onLoad={() => setLoading(false)}
			/>
		</div>
	);
};

export { CardImage };