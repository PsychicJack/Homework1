import { Movie } from "./movie.js";
import { Actor } from "./actor.js";

const URL_MOVIES = "http://localhost:3000/movies";
const URL_ACTORS = "http://localhost:3000/actors";
const URL_ACTEDIN = "http://localhost:3000/actedIn";

export function getMovieNames() {
    return new Promise((resolve, reject) => {
        return resolve(
            fetch(URL_MOVIES).then(result =>
                result.json().then(data =>
                    data.map(function(el) {
                        return { name: el.name, id: el.id };
                    })
                )
            )
        );
    });
}

export function getMovie(id) {
    return new Promise((resolve, reject) => {
        return resolve(
            fetch(`${URL_MOVIES}/${id}`).then(result => result.json())
        );
    });
}

function getActor(id) {
    return new Promise((resolve, reject) => {
        return resolve(
            fetch(`${URL_ACTORS}/${id}`).then(result => result.json())
        );
    });
}

export function getActors(MovieId) {
    const testArray = [4, 5, 6];

    return Promise.all([
        getActor(testArray[0]),
        getActor(testArray[1]),
        getActor(testArray[2])
    ]);
}
