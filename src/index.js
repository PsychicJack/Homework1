import { getMovieNames } from "./movie.service";
import { drawInit } from "./draw-functions";

getMovieNames().then(movies => {
    drawInit(document.body, movies);
});