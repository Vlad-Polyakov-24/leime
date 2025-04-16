import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/modal';
import { EditMemeForm, type IMeme } from '@entities/Meme';

type EditMemeModalProps = {
	className?: string;
	isOpen?: boolean;
	onOpenChange?: ((isOpen: boolean) => void);
	meme: IMeme;
};

const EditMemeModal = (props: EditMemeModalProps) => {
	const { className, isOpen, onOpenChange, meme } = props;

	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange} className={className}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className={'flex flex-col gap-1'}>Edit meme</ModalHeader>
						<ModalBody>
							<EditMemeForm meme={meme} closeModal={onClose} />
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default EditMemeModal;