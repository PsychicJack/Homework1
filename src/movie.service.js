import { Movie } from "./movie.js";
import { Actor } from "./actor.js";

const URL_MOVIES = "http://localhost:3000/movies";

export function getMovieNames() {
    return new Promise((resolve, reject) => {
        return resolve(
            fetch(URL_MOVIES).then(result =>
                result.json().then(data => data.map(el => el.name))
            )
        );
    });
}
