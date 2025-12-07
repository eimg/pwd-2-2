import { MovieType } from "@/types/global";
import Link from "next/link";

const base = "http://image.tmdb.org/t/p/w185";

export default function Movie({ movie }: { movie: MovieType }) {
	return (
		<div className="w-[185px] text-center hover:scale-105 transition-all">
			{movie.poster_path ? (
				<Link href={`/movie/${movie.id}`}>
					<img
						src={base + movie.poster_path}
						alt={movie.title}
					/>
				</Link>
			) : (
				<div className="h-[278px] bg-gray-200"></div>
			)}
			<div className="mt-2 font-bold">{movie.title}</div>
			<div className="text-gray-600">
				{movie.release_date.split("-")[0]}
			</div>
		</div>
	);
}
