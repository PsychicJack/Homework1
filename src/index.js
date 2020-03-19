import { getMovieNames } from "./movie.service";

getMovieNames().then(movies => {
    console.log(movies);
});