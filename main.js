const films = Array.from({ length: 100 }, (_, i) => ({
  title: `Tytuł filmu ${i + 1} sisotra`,
  src: 'https://www.w3schools.com/html/mov_bbb.mp4#t=0,10'
}));

const searchInput = document.getElementById('searchInput');
const filmGrid = document.getElementById('filmGrid');
const pagination = document.getElementById('pagination');

let currentPage = 1;
const itemsPerPage = 20;
let filteredFilms = [...films];

function renderFilms(page = 1) {
  filmGrid.innerHTML = '';
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = filteredFilms.slice(start, end);

  pageItems.forEach(film => {
    const card = document.createElement('div');
    card.className = 'film-card';
    card.innerHTML = `
      <a href="#">
        <video muted loop preload="auto">
          <source src="${film.src}" type="video/mp4">
        </video>
        <p>${film.title}</p>
      </a>
    `;
    filmGrid.appendChild(card);
  });

  renderPagination();
}

function renderPagination() {
  pagination.innerHTML = '';
  const pages = Math.ceil(filteredFilms.length / itemsPerPage);
  for (let i = 1; i <= pages; i++) {
    const a = document.createElement('a');
    a.textContent = i;
    a.onclick = () => {
      currentPage = i;
      renderFilms(i);
    };
    pagination.appendChild(a);
  }
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  filteredFilms = films.filter(film => film.title.toLowerCase().includes(query));
  currentPage = 1;
  renderFilms();
});

document.getElementById('menuToggle').onclick = () => {
  document.getElementById('userPanel').classList.toggle('active');
};
document.getElementById('closePanel').onclick = () => {
  document.getElementById('userPanel').classList.remove('active');
};

renderFilms();
