import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/modal';
import { ControlMemeForm, type IMeme } from '@entities/Meme';

type ControlMemeModalProps = {
	className?: string;
	isOpen?: boolean;
	onOpenChange?: ((isOpen: boolean) => void);
	meme?: IMeme | null;
};

const ControlMemeModal = (props: ControlMemeModalProps) => {
	const { className, isOpen, onOpenChange, meme } = props;

	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange} className={className}>
			<ModalContent className={'relative'}>
				{(onClose) => (
					<>
						<ModalHeader className={'flex flex-col gap-1'}>Edit meme</ModalHeader>
						<ModalBody>
							<ControlMemeForm meme={meme} closeModal={onClose} />
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default ControlMemeModal;