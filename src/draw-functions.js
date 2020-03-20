import { getMovie } from "./movie.service";

export function drawInit(host, data) {
    data.forEach(el => {
        const div = host.appendChild(document.createElement("div"));
        div.classList.add("movie-name");
        div.appendChild(document.createTextNode(el.name));
        const hidden = div.appendChild(document.createElement("input"));
        hidden.type = "hidden";
        hidden.value = el.id;
        const button = div.appendChild(document.createElement("button"));
        button.classList.add("expand-details");
        button.onclick = () => {
            getMovie(
                button.parentNode.querySelector("input[type=hidden]").value
            ).then(movie => {
                drawMovieDetails(button.parentNode, movie);
            });
        };
        button.innerHTML = "▼";
    });
}

export function drawMovieDetails(host, data) {
    const div = host.appendChild(document.createElement("div"));
    div.classList.add("movie-details");
    div.appendChild(document.createTextNode(data.genre.join(", ")));
    div.appendChild(document.createTextNode(`year: ${data.year}`));
}
