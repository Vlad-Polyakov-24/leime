import { Card, CardBody, CardHeader } from '@heroui/card';
import { classNames } from '@shared/lib/classNames';
import { CardImage } from '../CardImage/CardImage';
import { MemeLikes } from '../MemeLikes/MemeLikes';
import type { IMeme } from '@entities/Meme';

type MemeCardProps = {
	className?: string;
	meme: IMeme;
	openGallery?: () => void;
};

const MemeCard = (props: MemeCardProps) => {
	const { className, openGallery, meme: { title, image, likes, id } } = props;

	return (
		<Card as={'li'} className={classNames('p-4 gap-2', {}, [className])}>
			<CardHeader className={'p-0 flex-col items-start'}>
				<h3 className={'font-bold text-large'}>{title}</h3>
			</CardHeader>
			<CardBody className={'overflow-visible p-0 gap-2'}>
				<CardImage src={image} alt={title} openGallery={openGallery} />
				<MemeLikes id={id} likes={likes} />
			</CardBody>
		</Card>
	);
};

export default MemeCard;