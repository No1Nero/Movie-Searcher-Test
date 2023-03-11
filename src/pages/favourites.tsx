import MoviesList from "@/components/MoviesList";
import { useTypedSelector } from "@/store/hooks/useTypedSelector";
import Head from "next/head";

export default function Favourites() {
    const { favourites } = useTypedSelector(state => state);
    return (
        <>
            <Head>
                <title>Movie Searcher | Favourites</title>
            </Head>
            <div className="my-16">
                <p className="text-3xl font-bold text-center">Your Favourites</p>
                {favourites.length > 0 ?
                    <MoviesList movies={favourites} /> :
                    <p className="text-2xl text-center text-slate-600 mt-32">Oops... There`s nothing</p>
                }
            </div>
        </>
    );
};