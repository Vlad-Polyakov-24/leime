import type { CSSProperties } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Loader } from '@shared/ui/Loader';
import styles from './OverlayLoader.module.scss';

type FormLoaderProps = {
  className?: string;
  style?: CSSProperties;
};

const OverlayLoader = ({ className, style }: FormLoaderProps) => (
  <div className={classNames(styles.loader, {}, [className])} style={style}><Loader /></div>
);

export default OverlayLoader;
