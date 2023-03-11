import { getMoviesByTitle } from "@/api/moviesApi";
import ErrorSearch from "@/components/ErrorSearch";
import MoviesList from "@/components/MoviesList";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import { IMoviesInfo } from "@/models/movies";
import { useActions } from "@/store/hooks/useActions";
import { useTypedSelector } from "@/store/hooks/useTypedSelector";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [moviesInfo, setMoviesInfo] = useState<IMoviesInfo>({ Response: '', Search: [], totalResults: 0, });
  const { searchBar, currentPage } = useTypedSelector(state => state);
  const { resetCurrentPage } = useActions();

  useEffect(() => {
    if (searchBar) {
      getMovies();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetCurrentPage();
    getMovies();
  };

  const getMovies = () => {
    getMoviesByTitle({
      setState: setMoviesInfo,
      title: searchBar,
      page: currentPage.value,
    });
  };

  return (
    <>
      <Head>
        <title>Movie Searcher | Home</title>
      </Head>
      <div>
        <SearchBar handleSubmit={handleSubmit} />
        {moviesInfo.Response === 'True' ?
          <>
            <MoviesList movies={moviesInfo.Search} />
            <Pagination totalResults={moviesInfo.totalResults} getMovies={getMovies} />
          </> :
          <ErrorSearch error={moviesInfo?.Error} />
        }
      </div>
    </>
  )
};
