import style from './MoviePreview.module.css';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

export default function MoviePreview({movie}) {
  return (
    <motion.div className={style.content}
                whileHover={{scale: 1.15}}
                transition={{type: "spring", stiffness: 90}}
    >
      <Link to={`/movie/${movie.id}`}>
        <div className={style.poster}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
        </div>
        <div className={style.rate}>{movie.vote_average}</div>
        <h1>{movie.title}</h1>
      </Link>
      <p>{movie.release_date}</p>
    </motion.div>
  );
}
