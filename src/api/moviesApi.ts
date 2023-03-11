import axios from "axios";
import { IMoviesInfo } from "@/models/movies";
import { Dispatch, SetStateAction } from "react";

interface getMoviesByTitleProps {
    title: string,
    page: number,
    setState: Dispatch<SetStateAction<IMoviesInfo>>
};

export function getMoviesByTitle({ title, page, setState }: getMoviesByTitleProps) {
    return axios.get<IMoviesInfo>(`https://www.omdbapi.com/?apikey=e15a5486&s=${title}&page=${page}`)
        .then(response => setState(response.data));
};