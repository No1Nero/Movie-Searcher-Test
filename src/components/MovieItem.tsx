import { IMovieShort } from "@/models/movies";
import Image from "next/image";
import Link from "next/link";
import { BsCameraVideoOff } from 'react-icons/bs';

interface MovieItemProps {
    movie: IMovieShort
};

export default function MovieItem({ movie }: MovieItemProps) {
    const { Title, Year, Type, Poster, imdbID } = movie;
    return (
        <div className="border border-black rounded w-movieItemMobile sm:w-movieItemPC h-44 bg-white flex p-1 mx-5 my-5">
            {Poster === "N/A" ?
                <div className="w-28 flex items-center justify-center">
                    <BsCameraVideoOff size={30} />
                </div> :
                <Image alt={Title} src={Poster} width={100} height={100} className='max-w-100 w-auto h-auto' />}
            <div className="flex w-full flex-col justify-between pl-3">
                <Link className="text-xl hover:underline" href={`/${imdbID}`}>{Title}</Link>
                <div className="flex w-full justify-between">
                    <p className="font-semibold">{Year}y.</p>
                    <p>{Type}</p>
                </div>
            </div>
        </div>
    );
};