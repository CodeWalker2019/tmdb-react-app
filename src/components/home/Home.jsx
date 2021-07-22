import style from './Home.module.css';
import MoviePreview from "../movie-preview/MoviePreview";
import {useEffect} from "react";
import FadeIn from 'react-fade-in';
import LoaderPreset from "../Loader";

export default function Home({movies, isFetching, loadMovies}) {
  useEffect(() => {
    loadMovies();
  }, []);
  const message = movies.length === 0 && !isFetching ? "Something went wrong.. Fetched 0 post" : "";

  return (
    <>
      <h1 className={style.title}>What's Popular</h1>
      <div className={style.content}>
        {isFetching ?
          <div>
            <LoaderPreset/>
            <p className={style.message}>{message}</p>
          </div> :
          movies.map(movie => (
            <FadeIn key={movie.id}>
              <MoviePreview movie={movie}/>
            </FadeIn>
          ))
        }
      </div>
    </>
  );
}
