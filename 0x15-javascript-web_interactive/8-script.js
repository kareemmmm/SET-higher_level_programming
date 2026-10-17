async function fetchMovies() {
    try {
        const response = await fetch('https://swapi-api.alx-tools.com/api/films/?format=json');
        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        const movies = data.results;
        const ul = document.getElementById('list_movies');
        movies.forEach(movie => {
            const li = document.createElement('li');
            li.textContent = movie.title;
            ul.appendChild(li);
        });
    } catch (error) {
        const ul = document.getElementById('list_movies');
        ul.textContent = 'Error fetching movies';
    }
}

fetchMovies();
