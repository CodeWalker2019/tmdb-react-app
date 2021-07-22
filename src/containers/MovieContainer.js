import Movie from "../components/movie/Movie";
import {connect} from "react-redux";
import {fetchMovieById, toggleFetching} from "../redux/actions/movies";

function mapStateToProps(state) {
  return {
    movie: state.movies.fetchedMovie,
    isFetching: state.movies.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMovieByItsId: (id) => dispatch(fetchMovieById(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
