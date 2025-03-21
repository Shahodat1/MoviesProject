type Genre = "all_genres" | "action" | "comedy" | "thriller";

interface Sidebar {
    title: string;
    genre: Genre;
    stock: number;
    rate: number;
}

export const movies: Sidebar[] = [
    { title: "Airplane", genre: "comedy", stock: 7, rate: 3.5 },
    { title: "Die Hard", genre: "action", stock: 5, rate: 2.5 },
    { title: "The Hangover", genre: "comedy", stock: 10, rate: 4.0 },
    { title: "John Wick", genre: "action", stock: 8, rate: 4.5 },
    { title: "Inception", genre: "thriller", stock: 6, rate: 4.8 },
    { title: "The Godfather", genre: "thriller", stock: 4, rate: 4.9 },
    { title: "Rush Hour", genre: "comedy", stock: 12, rate: 3.8 },
    { title: "Mad Max", genre: "action", stock: 9, rate: 4.2 },
    { title: "Pulp Fiction", genre: "thriller", stock: 5, rate: 4.7 },
    { title: "Superbad", genre: "comedy", stock: 11, rate: 3.9 },
    { title: "Taken", genre: "action", stock: 6, rate: 4.1 },
    { title: "Se7en", genre: "thriller", stock: 3, rate: 4.6 },
    { title: "The Big Lebowski", genre: "comedy", stock: 7, rate: 4.0 },
    { title: "Terminator", genre: "action", stock: 8, rate: 4.4 },
    { title: "Fight Club", genre: "thriller", stock: 4, rate: 4.8 },
    { title: "Step Brothers", genre: "comedy", stock: 9, rate: 3.7 },
    { title: "Gladiator", genre: "action", stock: 5, rate: 4.3 },
    { title: "Joker", genre: "thriller", stock: 6, rate: 4.9 },
    { title: "The Dictator", genre: "comedy", stock: 7, rate: 3.6 },
    { title: "Mission Impossible", genre: "action", stock: 8, rate: 4.2 },
    { title: "Gone Girl", genre: "thriller", stock: 4, rate: 4.5 },
    { title: "Ted", genre: "comedy", stock: 10, rate: 3.8 },
    { title: "Avengers", genre: "action", stock: 7, rate: 4.6 },
    { title: "Shutter Island", genre: "thriller", stock: 5, rate: 4.7 },
    { title: "The Other Guys", genre: "comedy", stock: 6, rate: 3.9 },
    { title: "Iron Man", genre: "action", stock: 9, rate: 4.5 },
    { title: "Prisoners", genre: "thriller", stock: 3, rate: 4.8 },
    { title: "21 Jump Street", genre: "comedy", stock: 8, rate: 4.0 },
    { title: "Fast & Furious", genre: "action", stock: 7, rate: 4.1 },
    { title: "Black Swan", genre: "thriller", stock: 5, rate: 4.7 },
    { title: "Anchorman", genre: "comedy", stock: 11, rate: 3.8 },
    { title: "Rambo", genre: "action", stock: 6, rate: 4.3 },
    { title: "Zodiac", genre: "thriller", stock: 4, rate: 4.6 },
    { title: "Dumb and Dumber", genre: "comedy", stock: 10, rate: 3.5 },
    { title: "The Dark Knight", genre: "action", stock: 8, rate: 4.9 },
    { title: "No Country for Old Men", genre: "thriller", stock: 5, rate: 4.7 },
    { title: "Tropic Thunder", genre: "comedy", stock: 7, rate: 4.1 },
    { title: "The Matrix", genre: "action", stock: 9, rate: 4.8 },
    { title: "The Sixth Sense", genre: "thriller", stock: 6, rate: 4.6 },
    { title: "Hot Fuzz", genre: "comedy", stock: 7, rate: 4.0 },
    { title: "Kill Bill", genre: "action", stock: 5, rate: 4.4 },
    { title: "The Silence of the Lambs", genre: "thriller", stock: 4, rate: 4.9 },
    { title: "Blazing Saddles", genre: "comedy", stock: 6, rate: 3.7 },
    { title: "Rocky", genre: "action", stock: 8, rate: 4.3 },
    { title: "The Machinist", genre: "thriller", stock: 3, rate: 4.5 },
    { title: "Zombieland", genre: "comedy", stock: 9, rate: 4.0 },
    { title: "Madagascar", genre: "comedy", stock: 12, rate: 4.1 },
    { title: "The Equalizer", genre: "action", stock: 7, rate: 4.2 },
    { title: "The Girl with the Dragon Tattoo", genre: "thriller", stock: 5, rate: 4.8 }
];

