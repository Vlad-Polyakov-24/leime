'use client';

import { useCallback, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from '@heroui/react';
import { classNames } from '@shared/lib/classNames';
import { getKeyValue } from '../lib/getKeyValue';
import { ControlMemeModal } from '@features/ControlMemeModal';
import { Loader } from '@shared/ui/Loader';
import { useGetMemes, useDeleteMeme, type IMeme } from '@entities/Meme';
import { columns } from '../model/data/memesTable.data';

type MemesTableProps = {
	className?: string;
};

const MemesTable = ({ className }: MemesTableProps) => {
	const { data: memes, isLoading } = useGetMemes({ enabled: true });
	const { mutate: deleteMeme } = useDeleteMeme();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [currentMeme, setCurrentMeme] = useState<IMeme | null>(null);

	const sortedMemes = memes?.sort((a, b) => a.title.localeCompare(b.title));

	const handleControl = useCallback((meme?: IMeme) => {
		setCurrentMeme(meme ?? null);
		onOpen();
	}, [onOpen]);

	return (
		<>
			{isLoading
				? <Loader className={'m-auto'} />
				: (
					<div className={'flex flex-col gap-5'}>
						<Button className={'m-auto'} color={'primary'} onPress={() => handleControl()}>
							Create meme
						</Button>
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
													{getKeyValue({
														meme: item,
														key: columnKey,
														handleEdit: () => handleControl(item),
														handleDelete: () => deleteMeme(item.id),
													})}
												</TableCell>
											)}
										</TableRow>
									)}
								</TableBody>
							</Table>
						</div>
					</div>
				)
			}
			<ControlMemeModal isOpen={isOpen} onOpenChange={onOpenChange} meme={currentMeme} />
		</>
	);
};

export default MemesTable;