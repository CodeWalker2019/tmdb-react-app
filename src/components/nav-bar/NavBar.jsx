import style from "./NavBar.module.css";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue, showSearchBar} from "../../redux/actions/search";
import {Link} from "react-router-dom";

export default function NavBar(props) {
  const dispatch = useDispatch();
  const inputVal = useSelector(state => state.searchForm.searchValue);
  const showInputForm = useSelector(state => state.searchForm.showSearchBar);
  let link = showInputForm ? `/query=${inputVal}` : `/`;

  function handleChangeEvent(event) {
    let inputValue = event.target.value;
    dispatch(setSearchValue(inputValue));
  }

  function handleSearchClick() {
    dispatch(showSearchBar());
  }

  return (
    <div className={style.content}>
      <Link to='/'><h1 className={style.logo}>TMDB</h1></Link>
      <div className={style.searchContent}>
        <div className={style.searchInputContainer}>
          <motion.input
            placeholder='Search for a movie..'
            value={inputVal}
            onChange={handleChangeEvent}
            className={style.search}
            animate={showInputForm ? {width: "500px", opacity: "1"} : {width: "100px", opacity: "0"}}
          />
        </div>

        <Link to={link}>
          <motion.button
            whileTap={{scale: 1.3}}
            onClick={handleSearchClick}
            className={style.searchButton}
          >
            search
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
