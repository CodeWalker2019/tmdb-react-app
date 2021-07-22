import {useDispatch, useSelector} from "react-redux";
import style from "./MoviesList.module.css"
import {useParams} from "react-router";
import React, {useEffect} from "react";
import {queryMovies} from "../../redux/actions/movies";
import FadeIn from "react-fade-in";
import Pages from "./pages/Pages";
import LoaderPreset from "../Loader";

const MoviePreview = React.lazy(() => import("../movie-preview/MoviePreview"));

export default function MoviesList() {
  const queryResult = useSelector(state => state.movies.queryResultMovies);
  const currentPage = useSelector(state => state.movies.currentPage);
  const dispatch = useDispatch();
  const pages = Array.from({length: queryResult.total_pages}, (_, index) => index + 1);
  const {value} = useParams();

  useEffect(() => {
    return dispatch(queryMovies(value, currentPage));
  }, [value, currentPage]);

  return (
    <FadeIn>
      <div className={style.movieListContent}>
        <div className={style.pagesConstraint}>
          <Pages pages={pages}/>
        </div>
        <div className={style.moviesResult}>
          <React.Suspense fallback={<LoaderPreset/>}>
            {queryResult.results !== undefined && queryResult.results.map(movie => (
              <div className={style.previewConstraint} key={movie.id}>
                <MoviePreview movie={movie}/>
              </div>
            ))}
          </React.Suspense>
        </div>
      </div>
    </FadeIn>
  );
}
