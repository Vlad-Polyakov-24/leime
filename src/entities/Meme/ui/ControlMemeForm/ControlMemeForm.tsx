'use client';

import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from '@heroui/react';
import { classNames } from '@shared/lib/classNames';
import { generateInitialValues } from '../../lib/generateInitialValues';
import { OverlayLoader } from '@features/OverlayLoader';
import { useEditMeme } from '../../hooks/useEditMeme';
import { useCreateMeme } from '../../hooks/useCreateMeme';
import { formMemeSchema } from '@shared/config/validation/validation';
import { inputs } from '../../model/data/editMemeForm.data';
import { type IMeme, MemeFields } from '../../model/types/Meme.types';

type ControlMemeFormProps = {
	className?: string;
	meme?: IMeme | null;
	closeModal: () => void;
};

const ControlMemeForm = ({ className, meme, closeModal }: ControlMemeFormProps) => {
	const { mutate: editMeme } = useEditMeme();
	const { mutateAsync: createMeme, isPending } = useCreateMeme();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Omit<IMeme, MemeFields.ID>>({
		defaultValues: generateInitialValues(meme),
		resolver: yupResolver(formMemeSchema),
	});

	const onSubmit = useCallback(async (data: Omit<IMeme, MemeFields.ID>) => {
		if (meme) {
			const { id } = meme;
			editMeme({ id, updatedFields: data });
		} else {
			await createMeme(data);
		}

		closeModal();
	}, [editMeme, closeModal, meme, createMeme]);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={classNames('flex flex-col gap-4', {}, [className])}>
			{isPending && <OverlayLoader />}
			{inputs.map(({ label, name, type }) => (
				<Input
					key={name}
					label={label}
					{...register(name)}
					type={type}
					variant={'bordered'}
					isInvalid={!!errors[name]}
					errorMessage={errors[name]?.message}
				/>
			))}
			<Button type={'submit'} color={'primary'}>Save</Button>
		</form>
	);
};

export default ControlMemeForm;