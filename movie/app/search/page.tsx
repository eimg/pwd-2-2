import { MovieType } from "@/types/global";
import Movie from "@/components/movie";

async function fetchSearch(q: string): Promise<MovieType[]> {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${q}`, {
		headers: {
			Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
		},
	});

	return (await res.json()).results;
}

export default async function Search({
	searchParams,
}: {
	searchParams: Promise<{ q: string }>;
}) {
	const q = (await searchParams).q;
    const movies = await fetchSearch(q);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4 pb-2 border-b">Search: {q}</h2>
            <div className="flex gap-2 flex-wrap">
                {movies.map(movie => {
                    return (
                        <Movie key={movie.id} movie={movie} />
                    );
                })}
            </div>
        </div>
    );
}
