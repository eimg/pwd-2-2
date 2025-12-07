export type MovieType = {
	id: number;
	title: string;
	poster_path: string;
	backdrop_path: string;
	release_date: string;
	overview: string;
};

export type GenreType = {
	id: number;
	name: string;
};

export type PersonType = {
	id: number;
	name: string;
	character: string;
	profile_path: string;
};