document.addEventListener("DOMContentLoaded", () => {

    const watchlistKey = "cinevault_watchlist";

    let currentMovie = null;


    renderWatchlist();
    updateCount();
    setupModal();


    function getWatchlist() {

        try {

            return JSON.parse(
                localStorage.getItem(watchlistKey)
            ) || [];

        } catch {

            return [];

        }

    }


    function saveWatchlist(list) {

        localStorage.setItem(
            watchlistKey,
            JSON.stringify(list)
        );

        updateCount();

    }


    function updateCount() {

        const count =
            getWatchlist().length;

        const counter =
            document.getElementById(
                "watchlistCount"
            );

        const total =
            document.getElementById(
                "watchlistTotal"
            );


        if (counter) {
            counter.textContent = count;
        }


        if (total) {

            total.textContent =
                `${count} movie${count !== 1 ? "s" : ""}`;

        }

    }


    function renderWatchlist() {

        const grid =
            document.getElementById(
                "watchlistGrid"
            );

        const list =
            getWatchlist();


        if (!list.length) {

            grid.innerHTML = `

                <div class="empty-state">

                    <div class="empty-icon">
                        ♡
                    </div>

                    <h3>
                        Your watchlist is empty
                    </h3>

                    <p>
                        Explore CineVault and save movies
                        you want to watch later.
                    </p>

                    <br>

                    <a
                        href="index.html"
                        class="primary-button"
                    >
                        Explore Movies
                    </a>

                </div>

            `;

            return;

        }


        grid.innerHTML = "";


        list.forEach(movie => {

            const card =
                createCard(movie);

            grid.appendChild(card);

        });

    }


    function createCard(movie) {

        const card =
            document.createElement("article");

        card.className =
            "movie-card";


        card.innerHTML = `

            <div
                class="movie-poster ${movie.posterClass}"
            >

                <div class="poster-content">

                    <span class="poster-small">
                        CINEVAULT
                    </span>

                    <h3>
                        ${movie.title}
                    </h3>

                    <span class="poster-year">
                        ${movie.year}
                    </span>

                </div>

                <div class="poster-overlay">

                    <button
                        class="quick-view"
                    >
                        ▶
                    </button>

                </div>

                <button
                    class="card-watchlist saved"
                    title="Remove from watchlist"
                >
                    ♥
                </button>

            </div>


            <div class="movie-card-info">

                <div class="movie-title-row">

                    <h3>
                        ${movie.title}
                    </h3>

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
            .addEventListener(
                "click",
                event => {

                    if (
                        event.target.closest(
                            ".card-watchlist"
                        )
                    ) {
                        return;
                    }

                    openModal(movie);

                }
            );


        card
            .querySelector(".quick-view")
            .addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    openModal(movie);

                }
            );


        card
            .querySelector(".card-watchlist")
            .addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    removeMovie(movie.id);

                }
            );


        return card;

    }


    function removeMovie(id) {

        const updated =
            getWatchlist().filter(
                movie => movie.id !== id
            );

        saveWatchlist(updated);

        renderWatchlist();

    }


    function setupModal() {

        document
            .getElementById("modalClose")
            .addEventListener(
                "click",
                closeModal
            );


        document
            .querySelector(".modal-backdrop")
            .addEventListener(
                "click",
                closeModal
            );


        document
            .getElementById(
                "modalWatchlistButton"
            )
            .addEventListener(
                "click",
                () => {

                    if (currentMovie) {

                        removeMovie(
                            currentMovie.id
                        );

                        closeModal();

                    }

                }
            );


        document.addEventListener(
            "keydown",
            event => {

                if (event.key === "Escape") {

                    closeModal();

                }

            }
        );

    }


    function openModal(movie) {

        currentMovie = movie;


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
            document.getElementById(
                "modalPoster"
            );


        poster.className =
            `modal-poster ${movie.posterClass}`;


        poster.innerHTML = `

            <div class="poster-content large">

                <span class="poster-small">
                    CINEVAULT COLLECTION
                </span>

                <h3>
                    ${movie.title}
                </h3>

                <span class="poster-year">
                    ${movie.year}
                </span>

            </div>

        `;


        document.getElementById(
            "modalWatchlistButton"
        ).innerHTML =
            "♥ Remove from Watchlist";


        document
            .getElementById("movieModal")
            .classList.remove("hidden");


        document.body.classList.add(
            "modal-open"
        );

    }


    function closeModal() {

        document
            .getElementById("movieModal")
            .classList.add("hidden");


        document.body.classList.remove(
            "modal-open"
        );


        currentMovie = null;

    }

});