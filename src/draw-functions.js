
export function drawInit(host, data)
{
    data.forEach(el => {
        const div = host.appendChild(document.createElement("div"));
        div.classList.add("movie-name");
        div.innerHTML = el;
    });
}