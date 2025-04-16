import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import styles from './SectionIntro.module.scss';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => (
	<section className={classNames(styles.intro, {}, [className])}>
		<Container>
			<h1 className={styles.intro__title}>
				Developed by Vlad Poliakov
			</h1>
		</Container>
	</section>
);

export { SectionIntro };