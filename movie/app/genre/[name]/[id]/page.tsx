import { MovieType } from "@/types/global";
import Movie from "@/components/movie";

async function fetchGenre(id: string): Promise<MovieType[]> {
	const res = await fetch(
		`https://api.themoviedb.org/3/discover/movie?with_genres=${id}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
			},
		}
	);

	const data = await res.json();
	return data.results;
}

export default async function Genre({
	params,
}: {
	params: Promise<{ name: string; id: string }>;
}) {
	const { id, name } = await params;
	const movies = await fetchGenre(id);

	return (
		<div>
			<h2 className="text-xl font-bold mb-4 pb-2 border-b">{name}</h2>
			<div className="flex gap-2 flex-wrap">
				{movies.map(movie => {
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
