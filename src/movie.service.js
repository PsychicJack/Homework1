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
            fetch(`${URL_ACTORS}/${id}`).then(result => result.json().then(el => el.name))
        );
    });
}

function getActorsOnAMovie(movieId) {
    return new Promise((resolve, reject) => {
        return resolve(
            fetch(`${URL_ACTEDIN}?movieId=${movieId}`).then(result =>
                result.json().then(data => data.map(el => el.actorId))
            )
        );
    });
}

export function getActors(movieId) {
    return getActorsOnAMovie(movieId).then(result =>
        Promise.all(result.map(el => getActor(el)))
    );
}
