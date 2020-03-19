
export function drawInit(host, data)
{
    data.forEach(el => {
        const div = host.appendChild(document.createElement("div"));
        div.classList.add("movie-name");
        div.appendChild(document.createTextNode(el.name));
        const hidden = div.appendChild(document.createElement("input"));
        hidden.type = "hidden";
        hidden.value = el.id;
        const button = div.appendChild(document.createElement("button"));
        button.classList.add("expand-details");
        button.onclick = () => { console.log("expand")};
        button.innerHTML = "▼";
    });   
}

export function drawMovieDetails(host, data)
{
    const div = host.appendChild(document.createElement("div"));
    div.classList.add("movie-details");
}