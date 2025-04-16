import Lightbox from 'yet-another-react-lightbox';
import { Fullscreen, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

type GalleryProps = {
	className?: string;
	slides: { src: string }[];
	slideIndex: number;
	onClose?: () => void;
};

const Gallery = (props: GalleryProps) => {
	const { className, slides, slideIndex, onClose } = props;

	return (
		<Lightbox
			className={className}
			index={slideIndex}
			slides={slides}
			open={slideIndex >= 0}
			close={onClose}
			plugins={[Thumbnails, Fullscreen, Zoom]}
		/>
	);
};

export default Gallery;