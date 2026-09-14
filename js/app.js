document.addEventListener("DOMContentLoaded", () => {

    let currentHeroMovie = movies[0];
    let currentModalMovie = null;

    const watchlistKey = "cinevault_watchlist";


    /* =========================
       INITIALIZATION
    ========================= */

    initialize();

    function initialize() {

        setupNavigation();
        setupSearch();
        setupGenreFilters();
        setupModal();

        renderHero(movies[0]);

        renderMovies(
            movies.filter(movie => movie.category === "trending"),
            document.getElementById("trendingMovies")
        );

        renderMovies(
            movies.filter(movie => movie.category === "popular"),
            document.getElementById("popularMovies")
        );

        renderMovies(
            movies.filter(movie => movie.category === "top-rated"),
            document.getElementById("topRatedMovies")
        );

        renderAllMovies(movies);

        updateWatchlistCount();

    }


    /* =========================
       HERO
    ========================= */

    function renderHero(movie) {

        currentHeroMovie = movie;

        document.getElementById("heroTitle").textContent =
            movie.title;

        document.getElementById("heroRating").textContent =
            movie.rating;

        document.getElementById("heroYear").textContent =
            movie.year;

        document.getElementById("heroGenre").textContent =
            movie.genre;

        document.getElementById("heroDuration").textContent =
            movie.duration;

        document.getElementById("heroDescription").textContent =
            movie.description;

        const heroBackground =
            document.querySelector(".hero-background");

        heroBackground.className =
            `hero-background ${movie.posterClass}`;

        updateHeroWatchlistButton();

    }


    function updateHeroWatchlistButton() {

        const button =
            document.getElementById("heroWatchlistButton");

        const watchlist = getWatchlist();

        const exists = watchlist.some(
            movie => movie.id === currentHeroMovie.id
        );

        if (exists) {

            button.innerHTML = "♥ In Watchlist";
            button.classList.add("saved");

        } else {

            button.innerHTML = "♡ Add to Watchlist";
            button.classList.remove("saved");

        }

    }


    document
        .getElementById("heroDetailsButton")
        .addEventListener("click", () => {

            openMovieModal(currentHeroMovie);

        });


    document
        .getElementById("heroWatchlistButton")
        .addEventListener("click", () => {

            toggleWatchlist(currentHeroMovie);

        });


    /* =========================
       MOVIE CARDS
    ========================= */

    function renderMovies(movieList, container) {

        if (!container) return;

        container.innerHTML = "";

        movieList.forEach(movie => {

            container.appendChild(
                createMovieCard(movie)
            );

        });

    }


    function renderAllMovies(movieList) {

        const container =
            document.getElementById("allMovies");

        const count =
            document.getElementById("movieCount");

        if (!container) return;

        count.textContent =
            `${movieList.length} movies`;

        renderMovies(movieList, container);

    }


    function createMovieCard(movie) {

        const card =
            document.createElement("article");

        card.className = "movie-card";

        const watchlist =
            getWatchlist();

        const isSaved =
            watchlist.some(item => item.id === movie.id);

        card.innerHTML = `

            <div
                class="movie-poster ${movie.posterClass}"
                data-id="${movie.id}"
            >

                <div class="poster-content">

                    <span class="poster-small">
                        CINEVAULT
                    </span>

                    <h3>${movie.title}</h3>

                    <span class="poster-year">
                        ${movie.year}
                    </span>

                </div>

                <div class="poster-overlay">

                    <button
                        class="quick-view"
                        data-id="${movie.id}"
                        title="View movie"
                    >
                        ▶
                    </button>

                </div>

                <button
                    class="card-watchlist ${isSaved ? "saved" : ""}"
                    data-id="${movie.id}"
                    title="Add to watchlist"
                >
                    ${isSaved ? "♥" : "♡"}
                </button>

            </div>

            <div class="movie-card-info">

                <div class="movie-title-row">

                    <h3>${movie.title}</h3>

                    <span class="movie-rating">
                        ★ ${movie.rating}
                    </span>

                </div>

                <div class="movie-card-meta">

                    <span>${movie.year}</span>
                    <span>${movie.genre}</span>
                    <span>${movie.duration}</span>

                </div>

            </div>

        `;


        card
            .querySelector(".movie-poster")
            .addEventListener("click", event => {

                if (
                    event.target.closest(".card-watchlist") ||
                    event.target.closest(".quick-view")
                ) {
                    return;
                }

                openMovieModal(movie);

            });


        card
            .querySelector(".quick-view")
            .addEventListener("click", event => {

                event.stopPropagation();

                openMovieModal(movie);

            });


        card
            .querySelector(".card-watchlist")
            .addEventListener("click", event => {

                event.stopPropagation();

                toggleWatchlist(movie);

            });


        return card;

    }


    /* =========================
       WATCHLIST
    ========================= */

    function getWatchlist() {

        const stored =
            localStorage.getItem(watchlistKey);

        if (!stored) {
            return [];
        }

        try {

            return JSON.parse(stored);

        } catch {

            return [];

        }

    }


    function saveWatchlist(watchlist) {

        localStorage.setItem(
            watchlistKey,
            JSON.stringify(watchlist)
        );

        updateWatchlistCount();

    }


    function toggleWatchlist(movie) {

        let watchlist = getWatchlist();

        const existingIndex =
            watchlist.findIndex(
                item => item.id === movie.id
            );


        if (existingIndex !== -1) {

            watchlist.splice(existingIndex, 1);

        } else {

            watchlist.push(movie);

        }


        saveWatchlist(watchlist);

        refreshMovieCards();

        updateHeroWatchlistButton();

        if (currentModalMovie) {
            updateModalWatchlistButton();
        }

    }


    function updateWatchlistCount() {

        const count =
            getWatchlist().length;

        const counter =
            document.getElementById("watchlistCount");

        if (counter) {
            counter.textContent = count;
        }

    }


    function refreshMovieCards() {

        renderMovies(
            movies.filter(movie =>
                movie.category === "trending"
            ),
            document.getElementById("trendingMovies")
        );

        renderMovies(
            movies.filter(movie =>
                movie.category === "popular"
            ),
            document.getElementById("popularMovies")
        );

        renderMovies(
            movies.filter(movie =>
                movie.category === "top-rated"
            ),
            document.getElementById("topRatedMovies")
        );

        renderAllMovies(movies);

    }


    /* =========================
       SEARCH
    ========================= */

    function setupSearch() {

        const searchToggle =
            document.getElementById("searchToggle");

        const searchSection =
            document.getElementById("searchSection");

        const searchInput =
            document.getElementById("searchInput");

        const searchForm =
            document.getElementById("searchForm");


        searchToggle.addEventListener(
            "click",
            () => {

                searchSection.classList.toggle("active");

                if (
                    searchSection.classList.contains("active")
                ) {

                    searchInput.focus();

                }

            }
        );


        searchForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                performSearch(
                    searchInput.value.trim()
                );

            }
        );

    }


    function performSearch(query) {

        const section =
            document.getElementById(
                "searchResultsSection"
            );

        const grid =
            document.getElementById(
                "searchResultsGrid"
            );

        const resultCount =
            document.getElementById(
                "searchResultCount"
            );


        if (!query) {

            section.classList.add("hidden");

            return;

        }


        const lowerQuery =
            query.toLowerCase();


        const results =
            movies.filter(movie =>

                movie.title
                    .toLowerCase()
                    .includes(lowerQuery)

                ||

                movie.genre
                    .toLowerCase()
                    .includes(lowerQuery)

                ||

                movie.description
                    .toLowerCase()
                    .includes(lowerQuery)

            );


        section.classList.remove("hidden");


        resultCount.textContent =
            `${results.length} result${results.length !== 1 ? "s" : ""}`;


        if (results.length === 0) {

            grid.innerHTML = `

                <div class="empty-state">

                    <div class="empty-icon">
                        ◇
                    </div>

                    <h3>No movies found</h3>

                    <p>
                        Try searching for another title or genre.
                    </p>

                </div>

            `;

            return;

        }


        renderMovies(results, grid);


        section.scrollIntoView({
            behavior: "smooth"
        });

    }


    /* =========================
       GENRE FILTER
    ========================= */

    function setupGenreFilters() {

        const buttons =
            document.querySelectorAll(
                ".genre-button"
            );


        buttons.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    buttons.forEach(item =>
                        item.classList.remove("active")
                    );

                    button.classList.add("active");


                    const genre =
                        button.dataset.genre;


                    if (genre === "All") {

                        renderAllMovies(movies);

                    } else {

                        const filtered =
                            movies.filter(
                                movie =>
                                    movie.genre === genre
                            );

                        renderAllMovies(filtered);

                    }


                    document
                        .getElementById("allMoviesSection")
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }
            );

        });

    }


    /* =========================
       MODAL
    ========================= */

    function setupModal() {

        document
            .getElementById("modalClose")
            .addEventListener(
                "click",
                closeMovieModal
            );


        document
            .querySelector(".modal-backdrop")
            .addEventListener(
                "click",
                closeMovieModal
            );


        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape"
                ) {

                    closeMovieModal();

                }

            }
        );


        document
            .getElementById(
                "modalWatchlistButton"
            )
            .addEventListener(
                "click",
                () => {

                    if (currentModalMovie) {

                        toggleWatchlist(
                            currentModalMovie
                        );

                    }

                }
            );

    }


    function openMovieModal(movie) {

        currentModalMovie = movie;


        document.getElementById(
            "modalTitle"
        ).textContent = movie.title;


        document.getElementById(
            "modalRating"
        ).textContent = movie.rating;


        document.getElementById(
            "modalYear"
        ).textContent = movie.year;


        document.getElementById(
            "modalGenre"
        ).textContent = movie.genre;


        document.getElementById(
            "modalDuration"
        ).textContent = movie.duration;


        document.getElementById(
            "modalTagline"
        ).textContent = movie.tagline;


        document.getElementById(
            "modalDescription"
        ).textContent = movie.description;


        const poster =
            document.getElementById("modalPoster");


        poster.className =
            `modal-poster ${movie.posterClass}`;


        poster.innerHTML = `

            <div class="poster-content large">

                <span class="poster-small">
                    CINEVAULT ORIGINAL COLLECTION
                </span>

                <h3>${movie.title}</h3>

                <span class="poster-year">
                    ${movie.year}
                </span>

            </div>

        `;


        updateModalWatchlistButton();


        document
            .getElementById("movieModal")
            .classList.remove("hidden");


        document.body.classList.add(
            "modal-open"
        );

    }


    function closeMovieModal() {

        document
            .getElementById("movieModal")
            .classList.add("hidden");


        document.body.classList.remove(
            "modal-open"
        );


        currentModalMovie = null;

    }


    function updateModalWatchlistButton() {

        if (!currentModalMovie) {
            return;
        }


        const button =
            document.getElementById(
                "modalWatchlistButton"
            );


        const exists =
            getWatchlist().some(
                movie =>
                    movie.id === currentModalMovie.id
            );


        if (exists) {

            button.innerHTML =
                "♥ Remove from Watchlist";

            button.classList.add("saved");

        } else {

            button.innerHTML =
                "♡ Add to Watchlist";

            button.classList.remove("saved");

        }

    }


    /* =========================
       NAVIGATION
    ========================= */

    function setupNavigation() {

        const mobileButton =
            document.getElementById(
                "mobileMenuButton"
            );

        const mobileMenu =
            document.getElementById(
                "mobileMenu"
            );


        mobileButton.addEventListener(
            "click",
            () => {

                mobileMenu.classList.toggle(
                    "active"
                );

            }
        );


        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        mobileMenu.classList.remove(
                            "active"
                        );

                    }
                );

            });

    }

});