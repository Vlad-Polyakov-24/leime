'use client';

import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input } from '@heroui/react';
import { classNames } from '@shared/lib/classNames';
import { useEditMeme } from '../../hooks/useEditMeme';
import { editMemeSchema } from '@shared/config/validation/validation';
import { inputs } from '../../model/data/editMemeForm.data';
import { type IMeme, MemeFields } from '../../model/types/Meme.types';

type EditMemeFormProps = {
	className?: string;
	meme: IMeme;
	closeModal: () => void;
};

const EditMemeForm = ({ className, meme, closeModal }: EditMemeFormProps) => {
	const { id, ...currentMeme } = meme;
	const { mutate: editMeme } = useEditMeme();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Omit<IMeme, MemeFields.ID>>({
		defaultValues: currentMeme,
		resolver: yupResolver(editMemeSchema),
	});

	const onSubmit = useCallback((data: Omit<IMeme, MemeFields.ID>) => {
		editMeme({ id, updatedFields: data });
		closeModal();
	}, [editMeme, id, closeModal]);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={classNames('flex flex-col gap-4', {}, [className])}>
			{inputs.map(({ label, name, type }) => (
				<Input
					key={name}
					label={label}
					{...register(name)}
					type={type}
					variant={'bordered'}
					isInvalid={!!errors.title}
					errorMessage={errors.title?.message}
				/>
			))}
			<Button type={'submit'} color={'primary'}>Save</Button>
		</form>
	);
};

export default EditMemeForm;