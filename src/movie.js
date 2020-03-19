import { Actor } from "./actor.js";

export class Movie
{
    constructor(name, genre = none, year = none)
    {
        this.name = name;
        this.genre = genre;
        this.year = year;
        this.actors = [];
    }
}