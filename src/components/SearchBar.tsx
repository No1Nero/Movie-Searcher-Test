import { useActions } from "@/store/hooks/useActions";
import { useTypedSelector } from "@/store/hooks/useTypedSelector";
import { FormEvent, useEffect, useState } from "react";
import { BsSearch } from 'react-icons/bs';

export default function SearchBar({ handleSubmit }: { handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) {
    const [media, setMedia] = useState<boolean>();
    const { searchBar } = useTypedSelector(state => state);
    const { setSearchBar } = useActions();

    useEffect(() => {
        setMedia(window.matchMedia("(min-width: 640px)").matches);
    });

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setSearchBar(e.currentTarget.value);
    };

    return (
        <form onSubmit={handleSubmit} className="w-screen mt-16 sm:mt-24 flex flex-col justify-center items-center">
            <p className="text-3xl font-semibold pb-7">Search any movie</p>
            <div className="flex items-center">
                <input onChange={handleChange} type='text' placeholder="Search movie by title" value={searchBar} className="w-64 sm:w-searchbarPC h-12 p-2 rounded-md sm:rounded-r-none border-2 border-black" />
                {media &&
                    <button className="pl-3 bg-amber-700 active:bg-amber-800 h-12 w-14 border-2 border-black border-l-0 rounded-r-md" type={'submit'}><BsSearch size={35} /></button>
                }
            </div>
        </form>
    );
};
