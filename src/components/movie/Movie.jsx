import {useEffect} from "react";
import style from './Movie.module.css'
import LoaderPreset from "../Loader";
import {useParams} from "react-router";
import FadeIn from "react-fade-in";

export default function Movie(props) {
  const id = useParams();
  useEffect(() => {
    props.fetchMovieByItsId(id);
  }, []);

  return props.movie === null ? <LoaderPreset/> : (
    <FadeIn>
      <div className={style.movieContent}>
        <div
          className={style.backDrop}
          style={{
            background: `url(https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}) 0 0/100% auto no-repeat`
          }}
        >
          <div className={style.backDropContent}>
            <div className={style.movieDescriptionConstraint}>
              <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt="poster"/>
              <div className={style.description}>
                <h1>
                  {props.movie.original_title}
                  <span>({props.movie.release_date.slice(0, 4)})</span>
                </h1>
                <p>Genres: {props.movie.genres.map(genre => genre.name).join(', ')}</p>
                <div className={style.descriptionRate}>{props.movie.vote_average}</div>
                <h2>Overview</h2>
                <p>{props.movie.overview}</p>
                <br/>
                <a href={props.movie.homepage}>{props.movie.homepage}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
