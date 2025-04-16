import * as yup from 'yup';

export const editMemeSchema = yup.object({
	title: yup.string().max(32, 'Max length is 32 symbols').required('Title is required'),
	image: yup.string().url('Must be a valid URL').required('Image URL is required'),
	likes: yup
		.number()
		.transform((value, originalValue) => {
			return originalValue === '' ? undefined : value;
		})
		.typeError('Likes must be a number')
		.min(0, 'Likes cannot be negative')
		.max(99, 'Likes cannot be more than 99')
		.required('Field is required'),
});