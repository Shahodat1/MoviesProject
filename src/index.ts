import { movies } from './movies';

const tableBody: HTMLTableSectionElement | null = document.querySelector("table tbody");
const allBtn = document.querySelector(".all_btn") as HTMLButtonElement;
const actionBtn = document.querySelector(".action_btn") as HTMLButtonElement;
const comedyBtn = document.querySelector(".comedy_btn") as HTMLButtonElement;
const thrillerBtn = document.querySelector(".thriller_btn") as HTMLButtonElement;
const showingElm = document.querySelector('.showing') as HTMLParagraphElement;

function renderMovies(genre: string | null) {
    tableBody!.innerHTML = "";
    const filteredMovies = genre ? movies.filter(movie => movie.genre === genre) : movies;

    showingElm.textContent = `Showing ${filteredMovies.length} movies in the database.`

    filteredMovies.forEach(movie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="title">${movie.title}</td>
            <td class="genre">${movie.genre}</td>
            <td class="stock">${movie.stock}</td>
            <td class="rate">${movie.rate}</td>
            <td><span class="heart">&#9829;</span></td>
            <td><button class="delete">Delete</button></td>
        `;
        tableBody?.appendChild(row);
    });
}

allBtn.addEventListener("click", () => renderMovies(null));
actionBtn.addEventListener("click", () => renderMovies("action"));
comedyBtn.addEventListener("click", () => renderMovies("comedy"));
thrillerBtn.addEventListener("click", () => renderMovies("thriller"));

