import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { MemesTable } from '@widgets/MemesTable';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => {
	return (
		<section className={classNames('pt-5 pb-5 flex-grow', {}, [className])}>
			<Container className={'flex flex-col h-full'}>
				<MemesTable />
			</Container>
		</section>
	);
};

export { SectionIntro };