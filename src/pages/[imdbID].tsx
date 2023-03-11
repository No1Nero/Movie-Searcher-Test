import { IMovie } from "@/models/movies";
import Image from 'next/image';
import axios from "axios";
import { FiType } from 'react-icons/fi';
import { BsCalendar3, BsCameraVideoOff, BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GoGraph } from 'react-icons/go';
import { RiFilePaper2Line } from 'react-icons/ri';
import { useTypedSelector } from "@/store/hooks/useTypedSelector";
import { useActions } from "@/store/hooks/useActions";
import Head from "next/head";

export default function MoviePage({ movie }: { movie: IMovie }) {
    const { Title, Released, Runtime, Actors, Plot, Poster, Ratings, Type, imdbID } = movie;
    const { favourites } = useTypedSelector(state => state);
    const { addToFavourites, removeFromFavourites } = useActions();
    const isExistInFavourites: boolean = favourites.some(movie => movie.imdbID === imdbID);

    return (
        <>
            <Head>
                <title>Movie Searcher | Details</title>
            </Head>
            <div className="w-screen mt-0 h-full sm:h-[calc(100vh-5rem)] flex justify-center items-center">
                <div className=" w-screen sm:w-moviePagePC h-full sm:h-moviePagePC border-2 border-black rounded-lg p-1 sm:p-5 pb-5 bg-white">
                    <div className="sm:flex">
                        {Poster === "N/A" ?
                            <div className="w-full h-64 flex items-center justify-center">
                                <BsCameraVideoOff size={30} />
                            </div> :
                            <div className="flex sm:flex-none justify-center my-3 sm:my-0">
                                <Image alt={Title} src={Poster} width={250} height={250} className=' w-auto h-auto' priority />
                            </div>
                        }
                        <div className=" ml-7">
                            <p className="text-2xl font-bold mb-16">{Title}</p>
                            <div className="text-lg">
                                <div className="flex items-center mb-3">
                                    <FiType className="mr-2" />
                                    <span className="font-semibold mr-3">Type:</span>{Type}
                                </div>
                                <div className="flex items-center mb-3">
                                    <BsCalendar3 className="mr-2" />
                                    <span className="font-semibold mr-3">Released:</span>{Released}
                                </div>
                                <div className="flex items-center mb-3">
                                    <AiOutlineClockCircle className="mr-2" />
                                    <span className="font-semibold mr-3">Runtime:</span>{Runtime}
                                </div>
                                <div className="flex items-start mb-3">
                                    <div className="flex items-center">
                                        <BsFillPersonFill className="mr-2" />
                                        <span className="font-semibold mr-3">Actors:</span>
                                    </div>
                                    {Actors}
                                </div>
                                <div className=" flex items-start mb-2">
                                    <div className="flex items-center mb-3">
                                        <GoGraph className="mr-2" />
                                        <p className="font-semibold mr-3">Ratings:</p>
                                    </div>
                                    <div>
                                        {Ratings.map(({ Source, Value }) => (
                                            <div key={Source} className="flex items-center">
                                                <p>{Source}: <span className="font-semibold">{Value}</span></p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-start mt-5">
                        <div className="flex items-center">
                            <RiFilePaper2Line className="mr-2" />
                            <span className="font-semibold mr-3">Plot:</span>
                        </div>
                        {Plot}
                    </div>
                    <button className="border border-black text-xl font-semibold text-white rounded-lg w-44 h-14 mt-6 bg-amber-700 active:bg-amber-800" onClick={() => isExistInFavourites ? removeFromFavourites(imdbID) : addToFavourites(movie)} type="button">{isExistInFavourites ? 'Remove from favourites' : 'Add to favourites'}</button>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = async (context: any) => {
    const { imdbID } = context.params;
    const movieData = await axios.get(`https://www.omdbapi.com/?apikey=e15a5486&i=${imdbID}`)
        .then(response => response.data);

    return {
        props: {
            movie: movieData,
        },
    };
};