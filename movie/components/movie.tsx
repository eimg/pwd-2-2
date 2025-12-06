import { MovieType } from "@/types/global";

const base = "http://image.tmdb.org/t/p/w185";

export default function Movie({ movie }: { movie: MovieType }) {
	return <div className="w-[200px] text-center">
		<img src={base + movie.poster_path} />
		<div className="mt-2 font-bold">{movie.title}</div>
		<div className="text-gray-600">{movie.release_date.split("-")[0]}</div>
	</div>;
}
