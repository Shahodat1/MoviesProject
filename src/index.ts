import { movies } from './movies';

type Genre = "all_genres" | "action" | "comedy" | "thriller";

interface Sidebar {
    title: string;
    genre: Genre;
    stock: number;
    rate: number;
}

const tableBody: HTMLTableSectionElement | null = document.querySelector("table tbody");
const allBtn = document.querySelector(".all_btn") as HTMLButtonElement;
const actionBtn = document.querySelector(".action_btn") as HTMLButtonElement;
const comedyBtn = document.querySelector(".comedy_btn") as HTMLButtonElement;
const thrillerBtn = document.querySelector(".thriller_btn") as HTMLButtonElement;
const showingElm = document.querySelector('.showing') as HTMLParagraphElement;
const searchInput = document.querySelector('.search input') as HTMLInputElement;
const newMovieBtn = document.querySelector('.new-movie') as HTMLButtonElement;

// function renderMovies(genre: string | null) {
//   tableBody!.innerHTML = "";
//   const filteredMovies = genre ? movies.filter(movie => movie.genre === genre) : movies;

//   showingElm.textContent = `Showing ${filteredMovies.length} movies in the database.`;

//   filteredMovies.forEach((movie, index) => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//           <td class="title">${movie.title}</td>
//           <td class="genre">${movie.genre}</td>
//           <td class="stock">${movie.stock}</td>
//           <td class="rate">${movie.rate}</td>
//           <td><span class="heart">&#9829;</span></td>
//           <td><button class="delete">Delete</button></td>
//       `;
//     const deleteBtn = row.querySelector(".delete") as HTMLButtonElement;
//     const titleCell = row.querySelector('.title') as HTMLTableCellElement;

//     deleteBtn.addEventListener("click", () => {
//       const movieIndex = movies.findIndex(m => m.title === movie.title && m.genre === movie.genre);
//       if (movieIndex !== -1) {
//         movies.splice(movieIndex, 1);
//         renderMovies(genre);
//       }
//     });


//     tableBody?.appendChild(row);
//   });
// }

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
   
function addNewMovie() {
  const popup = document.querySelector('.popup') as HTMLFormElement;
  popup.style.display = "block";
}

const popup = document.querySelector('.popup') as HTMLFormElement | null;
popup?.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = (popup.querySelector('input[placeholder="Title"]') as HTMLInputElement)?.value.trim();
  const genre = (popup.querySelector('input[placeholder="Genre"]') as HTMLInputElement)?.value.trim();
  const stock = (popup.querySelector('input[placeholder="Stock"]') as HTMLInputElement)?.value.trim();
  const rate = (popup.querySelector('input[placeholder="Rate"]') as HTMLInputElement)?.value.trim();

  if (title && genre && stock && rate) {
    if (["action", "comedy", "thriller"].includes(genre)) {
      const newMovie: Sidebar = {
        title,
        genre: genre as Genre, 
        stock: parseInt(stock),
        rate: parseFloat(rate),
      };
      movies.push(newMovie);
      renderMovies(null); 

      popup.style.display = "none";
      popup.reset();
    } else {
      alert("Недопустимый жанр. Пожалуйста, введите: action, comedy или thriller.");
    }
  } else {
    alert("Пожалуйста, заполните все поля.");
  }
});


newMovieBtn.addEventListener("click", () => {
  console.log("Кнопка нажата!");
  addNewMovie();
});

const moviesPerPage = 5; 

function renderMovies(genre: string | null, currentPage: number = 1) {
  tableBody!.innerHTML = "";

  const filteredMovies = genre ? movies.filter(movie => movie.genre === genre) : movies;

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const start = (currentPage - 1) * moviesPerPage;
  const pageMovies = filteredMovies.slice(start, start + moviesPerPage);

  showingElm.textContent = `Showing ${filteredMovies.length} movies in the database.`;

  pageMovies.forEach((movie, index) => {
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
    deleteBtn.addEventListener("click", () => {
      const movieIndex = movies.findIndex(m => m.title === movie.title && m.genre === movie.genre);
      if (movieIndex !== -1) {
        movies.splice(movieIndex, 1);
        renderMovies(genre, currentPage);
      }
    });
    tableBody?.appendChild(row);
  });

  updatePagination(totalPages, currentPage, genre);
}

function updatePagination(totalPages: number, currentPage: number, genre: string | null) {
  const paginationDiv = document.querySelector(".pagination") as HTMLDivElement;
  paginationDiv.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i.toString();
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
      renderMovies(genre, i);
    });
    paginationDiv.appendChild(btn);
  }
}



renderMovies(null)

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  searchMovies(query);
});

allBtn.addEventListener("click", () => renderMovies(null));
actionBtn.addEventListener("click", () => renderMovies("action"));
comedyBtn.addEventListener("click", () => renderMovies("comedy"));
thrillerBtn.addEventListener("click", () => renderMovies("thriller"));



