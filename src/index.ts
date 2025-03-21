import { movies } from './movies';

const tableBody: HTMLTableSectionElement | null = document.querySelector("table tbody");
const allBtn = document.querySelector(".all_btn") as HTMLButtonElement;
const actionBtn = document.querySelector(".action_btn") as HTMLButtonElement;
const comedyBtn = document.querySelector(".comedy_btn") as HTMLButtonElement;
const thrillerBtn = document.querySelector(".thriller_btn") as HTMLButtonElement;
const showingElm = document.querySelector('.showing') as HTMLParagraphElement;
const searchInput = document.querySelector('.search input') as HTMLInputElement;

function renderMovies(genre: string | null) {
  tableBody!.innerHTML = "";
  const filteredMovies = genre ? movies.filter(movie => movie.genre === genre) : movies;

  showingElm.textContent = `Showing ${filteredMovies.length} movies in the database.`;

  filteredMovies.forEach((movie, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
          <td class="title">${movie.title}</td>
          <td class="genre">${movie.genre}</td>
          <td class="stock">${movie.stock}</td>
          <td class="rate">${movie.rate}</td>
          <td><span class="heart">&#9829;</span></td>
          <td><button class="delete">Delete</button></td>
      `;
    const deleteBtn = row.querySelector(".delete") as HTMLButtonElement;
    const titleCell = row.querySelector('.title') as HTMLTableCellElement;

    deleteBtn.addEventListener("click", () => {
      const movieIndex = movies.findIndex(m => m.title === movie.title && m.genre === movie.genre);
      if (movieIndex !== -1) {
        movies.splice(movieIndex, 1);
        renderMovies(genre);
      }
    });


    tableBody?.appendChild(row);
  });
}

function searchMovies(query: string) {
  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  showingElm.textContent = `Showing ${filteredMovies.length} movies in the database.`;
  tableBody!.innerHTML = "";

  filteredMovies.forEach((movie, index) => {
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

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  searchMovies(query);
});

renderMovies(null)

allBtn.addEventListener("click", () => renderMovies(null));
actionBtn.addEventListener("click", () => renderMovies("action"));
comedyBtn.addEventListener("click", () => renderMovies("comedy"));
thrillerBtn.addEventListener("click", () => renderMovies("thriller"));



