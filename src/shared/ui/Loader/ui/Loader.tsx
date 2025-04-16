import { classNames } from '@shared/lib/classNames';
import styles from './Loader.module.scss';

type LoaderProps = {
	className?: string;
	absolute?: boolean;
};

const Loader = ({ className, absolute }: LoaderProps) => (
	<span className={classNames(styles.loader, { [styles.absolute]: absolute }, [className])}/>
);

export default Loader;