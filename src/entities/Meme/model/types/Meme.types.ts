export enum MemeFields {
	ID = 'id',
	TITLE = 'title',
	IMAGE = 'image',
	LIKES = 'likes',
}

export interface IMeme {
	[MemeFields.ID]: number;
	[MemeFields.TITLE]: string;
	[MemeFields.IMAGE]: string;
	[MemeFields.LIKES]: number;
}