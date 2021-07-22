import NavBar from "./components/nav-bar/NavBar";
import HomeContainer from "./containers/HomeContainer";
import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom"
import MovieContainer from "./containers/MovieContainer";
import LoaderPreset from "./components/Loader";

const MoviesList = React.lazy(() => import("./components/movies-list/MoviesList"));

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path='/movie/:id'>
          <MovieContainer/>
        </Route>
        <Route path='/query=:value'>
          <React.Suspense fallback={<LoaderPreset/>}>
            <MoviesList/>
          </React.Suspense>
        </Route>
        <Route exact path={['/', '/movies/most-popular']}>
          <HomeContainer/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
