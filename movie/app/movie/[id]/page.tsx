import { MovieType, PersonType } from "@/types/global";
import Link from "next/link";

async function fetchCast(id: string): Promise<PersonType[]> {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${id}/credits`,
		{
			headers: {
				Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
			},
		}
	);

	const data = await res.json();
	return data.cast;
}

async function fetchMovie(id: string): Promise<MovieType> {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
		headers: {
			Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
		},
	});

	return await res.json();
}

const base = "http://image.tmdb.org/t/p/w1280";
const profile = "http://image.tmdb.org/t/p/w185";

export default async function Movie({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const movie = await fetchMovie(id);
	const cast = await fetchCast(id);

	return (
		<div>
			<h2 className="text-xl font-bold mb-4 pb-2 border-b">
				{movie.title} ({movie.release_date.split("-")[0]})
			</h2>
			<img src={base + movie.backdrop_path} />
			<p className="py-4">{movie.overview}</p>
			<h2 className="text-xl font-bold mb-4 pb-2 border-b">Cast</h2>
			<div className="flex gap-2 flex-wrap">
				{cast.map(person => {
					return (
						<div
							className="w-[185px] text-center mb-4"
							key={person.id}>
							{person.profile_path ? (
								<img src={profile + person.profile_path} />
							) : (
								<div className="h-[278px] bg-gray-200"></div>
							)}
							<div>
								<Link href={`/person/${person.id}`}>{person.name}</Link>
							</div>
							<div className="text-gray-600">
								{person.character}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
