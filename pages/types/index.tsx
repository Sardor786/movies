export type MovieItemTypes = {
	id: number;
	ageLimit: number;
	poster: string;
	title: string;
	title_en: string;
	description: string;
	moduleId: number;
	movie_slug: string;
	budget: string;
	slogan: string;
	year: number;
	is_favourite: boolean;
	age_limit: number;
	is_serial: boolean;
	isSerial: boolean;
	is_free: boolean;
	isFree: boolean;
	isNew: boolean;
	uploadTime: number;
	upload_time: number;
	created_at: string;
	countries: Array<{
		id: number;
		title: string;
	}>;
	genres: Array<{
		id: number;
		title: string;
	}>;
	gallery: Array<{
		id: number;
		path: string;
	}>;
	rating: {
		kp: {
			count: number;
			rating: number;
		};
		imdb: {
			count: number;
			rating: number;
		};
	};
	kp_rating: number;
	imdb_rating: number;
	people: Array<{
		post: string;
		employees: Array<{
			id: number;
			fullName: string;
			full_name: string;
			full_name_en: string;
			photo: string;
		}>;
	}>;
	files: Array<{
		id: number;
		poster: string;
		fileSize: number;
		quality: string;
		fileDuration: number;
		fileWidth: number;
		fileHeight: number;
		isWatched: boolean;
		lastPosition: number;
	}>;
};

export type MovieListTypes = {
	total: number;
	lastPage: number;
	currentPage: number;
	perPage: number;
	movies: Array<MovieItemTypes>;
};
