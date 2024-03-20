export interface Film {
	ok: boolean;
	description: {
		'#TITLE': string;
		'#YEAR': number;
		'#IMDB_ID': string;
		'#RANK': number;
		'#ACTORS': string;
		'#AKA': string;
		'#IMDB_URL': string;
		'#IMDB_IV': string;
		'#IMG_POSTER': string;
		photo_width?: number;
		photo_height?: number;
	}[];
	error_code: number;
}
