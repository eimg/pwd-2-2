import Movie from "@/components/movie";

import { MovieType } from "@/types/global";

async function fetchTop(): Promise<MovieType[]> {
	const res = await fetch("https://api.themoviedb.org/3/movie/top_rated", {
		headers: {
			Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
		},
	});

	const data = await res.json();
	return data.results;
}

async function fetchPopular(): Promise<MovieType[]> {
	const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
		headers: {
			Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
		},
	});

	const data = await res.json();
	return data.results;
}

export default async function Home() {
	const popular = await fetchPopular();
	const top = await fetchTop();

	return (
		<div>
			<h2 className="text-xl font-bold mb-4 pb-2 border-b">Popular</h2>
			<div className="flex gap-2 flex-wrap">
				{popular.map(movie => {
					return (
						<Movie
							key={movie.id}
							movie={movie}
						/>
					);
				})}
			</div>

			<h2 className="text-xl font-bold my-4 pb-2 border-b">Popular</h2>
			<div className="flex gap-2 flex-wrap">
				{top.map(movie => {
					return (
						<Movie
							key={movie.id}
							movie={movie}
						/>
					);
				})}
			</div>
		</div>
	);
}
