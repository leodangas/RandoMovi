import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Movie from "./components/Movie/Movie";
import { FiltersProvider } from "./components/FiltersProvider";
import { GenresProvider } from "./components/GenresProvider";
import { FiltersGenresProvider } from "./components/FiltersGenresProvider";
import { FiltersOtherProvider } from "./components/FiltersOtherProvider";
function App() {
  return (
    <div className="App">
      <Switch>
        <FiltersProvider>
          <GenresProvider>
            <FiltersGenresProvider>
              <FiltersOtherProvider>
                <Route path="/" exact>
                  <Redirect to="/home" />
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/movie/:movieId">
                  <Movie />
                </Route>
              </FiltersOtherProvider>
            </FiltersGenresProvider>
          </GenresProvider>
        </FiltersProvider>
      </Switch>
    </div>
  );
}

export default App;
