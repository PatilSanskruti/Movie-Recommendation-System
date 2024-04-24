var hell = document.getElementsByClassName('movie-cards');

        hell[0].addEventListener('click', () => {
            
            
                h_1();
                
                
        });
function h_1() {
    console.log("hwllo)")
    window.location='HollywoodMovies/h-1/h-1.html'
}

// Function to display recommended movies
function displayRecommendedMovies(recommendations) {
    const recommendedMoviesDiv = document.getElementById("recommendedMovies");
    recommendedMoviesDiv.innerHTML = ""; // Clear previous recommendations

    if (recommendations.length === 0) {
        recommendedMoviesDiv.innerHTML = "<p>No recommendations found for the selected genre.</p>";
    } else {
        recommendations.forEach(movie => {
            const movieCardDiv = document.createElement("div");
            movieCardDiv.className = "movie-cards";

            const imageDiv = document.createElement("div");
            imageDiv.className = "movies-cards-image";

            const img = document.createElement("img");
            img.src = movie.poster;
            img.alt = movie.name;
            imageDiv.appendChild(img);

            const titleDiv = document.createElement("div");
            titleDiv.className = "movies-cards-title";
            const title = document.createElement("h3");
            title.textContent = movie.name;
            titleDiv.appendChild(title);

            movieCardDiv.appendChild(imageDiv);
            movieCardDiv.appendChild(titleDiv);

            recommendedMoviesDiv.appendChild(movieCardDiv);
        });
    }
}
// Event listener for search input
document.getElementById("searchInput").addEventListener("input", function() {
    const inputGenre = this.value.trim().toLowerCase();
    const recommendations = getRecommendationsByGenre(inputGenre);
    displayRecommendedMovies(recommendations);
});

// Event listener for navbar links
document.querySelectorAll(".navbar-inside-div a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const genre = link.textContent;
        const recommendations = getRecommendationsByGenre(genre);
        displayRecommendedMovies(recommendations);
    });
});
