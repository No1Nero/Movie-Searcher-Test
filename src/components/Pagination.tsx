import { useActions } from "@/store/hooks/useActions";
import { useTypedSelector } from "@/store/hooks/useTypedSelector";
import { useEffect } from "react";

interface PaginationProps {
    totalResults: number,
    getMovies: () => void,
};
export default function Pagination({ totalResults, getMovies }: PaginationProps) {
    const { value } = useTypedSelector(state => state.currentPage);
    const { incrementCurrentPage, decrementCurrentPage } = useActions();

    useEffect(() => {
        getMovies();
    }, [value]);

    const handleIncr = () => {
        incrementCurrentPage();
    };

    const handleDecr = () => {
        decrementCurrentPage();
    };

    return (
        <div className="flex justify-center items-center mt-10 mb-14 text-2xl">
            <button className=" w-32 h-10 border border-black bg-amber-700 text-white rounded-l-lg active:bg-amber-800 disabled:bg-slate-500" onClick={handleDecr} disabled={value === 1}>Prev page</button>
            <div className="px-3 h-10 flex items-center justify-center bg-white border-t border-b border-black">
                {value}/{Math.ceil(totalResults / 10)}
            </div>
            <button className=" w-32 h-10 border border-black bg-amber-700 text-white rounded-r-lg active:bg-amber-800 disabled:bg-slate-500" onClick={handleIncr} disabled={value * 10 >= totalResults}>Next page</button>
        </div>
    );
};