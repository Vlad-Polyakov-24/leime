'use client';

import { useCallback, useState } from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	useDisclosure,
} from '@heroui/react';
import { classNames } from '@shared/lib/classNames';
import { getKeyValue } from '../lib/getKeyValue';
import { EditMemeModal } from '@features/EditMemeModal';
import { Loader } from '@shared/ui/Loader';
import { useGetMemes, type IMeme } from '@entities/Meme';
import { columns } from '../model/data/memesTable.data';

type MemesTableProps = {
	className?: string;
};

const MemesTable = ({ className }: MemesTableProps) => {
	const { data: memes, isLoading } = useGetMemes({ enabled: true });
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [currentMeme, setCurrentMeme] = useState<IMeme | null>(null);

	const sortedMemes = memes?.sort((a, b) => a.id - b.id);

	const handleEdit = useCallback((meme: IMeme) => {
		setCurrentMeme(meme);
		onOpen();
	}, [onOpen]);

	return (
		<>
			{isLoading
				? <Loader className={'m-auto'} />
				: (
					<div className={classNames('overflow-x-auto m-[-20px]', {} , [className])}>
						<Table aria-label={'Memes table'} className={'min-w-[800px] p-[20px]'}>
							<TableHeader columns={columns}>
								{({ key, label }) => <TableColumn key={key}>{label}</TableColumn>}
							</TableHeader>
							<TableBody items={sortedMemes ?? []}>
								{(item) => (
									<TableRow key={item.id}>
										{(columnKey) => (
											<TableCell>
												{getKeyValue({ meme: item, key: columnKey, handleEdit: () => handleEdit(item) })}
											</TableCell>
										)}
									</TableRow>
								)}
							</TableBody>
						</Table>
					</div>
				)
			}
			{currentMeme && <EditMemeModal isOpen={isOpen} onOpenChange={onOpenChange} meme={currentMeme} />}
		</>
	);
};

export default MemesTable;