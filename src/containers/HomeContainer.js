import {getPopular} from "../redux/actions/movies";
import {connect} from "react-redux";
import Home from "../components/home/Home";

function mapStateToProps(state) {
  return {
    movies: state.movies.mostPopularMovies,
    isFetching: state.movies.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadMovies: () => dispatch(getPopular())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);