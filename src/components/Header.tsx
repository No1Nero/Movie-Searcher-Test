import { useTypedSelector } from "@/store/hooks/useTypedSelector";
import Link from "next/link";
import { HiVideoCamera } from 'react-icons/hi';

export default function Header() {
    const { favourites } = useTypedSelector(state => state);
    return (
        <header className=" bg-amber-700 w-screen h-20 flex items-center justify-between px-6 sm:px-24 text-2xl sm:text-4xl font-bold text-white">
            <Link href={'/'}>Movie Searcher</Link>
            <div className="flex items-center">
                <Link href={'/favourites'}><HiVideoCamera size={33} /></Link>
                {favourites.length > 0 && <p className='text-white absolute ml-8 mb-7 text-xl font-bold'>{favourites.length}</p>}
            </div>
        </header>
    );
};