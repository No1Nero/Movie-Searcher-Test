import { useEffect, useState } from "react";

interface ErrorSearchProps {
    error: string | undefined
};

export default function ErrorSearch({ error }: ErrorSearchProps) {
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        switch (error) {
            case 'Incorrect IMDb ID.':
                setErrorMessage('No results for your search');
                break;

            case 'Too many results.':
                setErrorMessage('Request too short');
                break;

            case 'Movie not found!':
                setErrorMessage('Movie not found');
                break;

            default:
                return;
        }
    }, [error]);

    return (
        <div className="flex items-center justify-center mt-20 text-2xl font-semibold text-slate-400">
            {errorMessage}
        </div>
    );
};