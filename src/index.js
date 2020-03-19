import { getMovieNames, getMovie } from "./movie.service";
import { drawInit } from "./draw-functions";

getMovieNames().then(movies => {
    drawInit(document.body, movies);
});

getMovie(1).then(movie => console.log(movie))