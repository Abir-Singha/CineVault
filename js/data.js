 const movies = [
    {
        id: 1,
        title: "Interstellar",
        year: 2014,
        rating: 8.7,
        genre: "Sci-Fi",
        duration: "2h 49m",
        category: "top-rated",
        posterClass: "poster-space",
        tagline: "Mankind's next chapter begins beyond the stars.",
        description:
            "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival. Their journey takes them across distant worlds where time and reality behave in extraordinary ways."
    },
    {
        id: 2,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        genre: "Thriller",
        duration: "2h 28m",
        category: "top-rated",
        posterClass: "poster-dream",
        tagline: "Your mind is the scene of the crime.",
        description:
            "A skilled extractor who enters people's dreams is offered a chance to erase his past by performing the impossible: planting an idea inside another person's mind."
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        genre: "Action",
        duration: "2h 32m",
        category: "top-rated",
        posterClass: "poster-night",
        tagline: "Welcome to a world without rules.",
        description:
            "Batman faces a criminal mastermind who pushes Gotham City into chaos and forces the hero to confront the limits of justice."
    },
    {
        id: 4,
        title: "Dune",
        year: 2021,
        rating: 8.0,
        genre: "Sci-Fi",
        duration: "2h 35m",
        category: "trending",
        posterClass: "poster-dune",
        tagline: "Beyond fear, destiny awaits.",
        description:
            "A gifted young nobleman is drawn into a conflict over the most valuable resource in the universe and must embrace a destiny larger than himself."
    },
    {
        id: 5,
        title: "Oppenheimer",
        year: 2023,
        rating: 8.6,
        genre: "Drama",
        duration: "3h",
        category: "trending",
        posterClass: "poster-fire",
        tagline: "The world forever changes.",
        description:
            "The story of the scientist whose work helped create a weapon that transformed the course of modern history."
    },
    {
        id: 6,
        title: "Avatar",
        year: 2009,
        rating: 7.8,
        genre: "Adventure",
        duration: "2h 42m",
        category: "popular",
        posterClass: "poster-avatar",
        tagline: "Enter a new world.",
        description:
            "A former marine becomes part of an extraordinary alien world and finds himself caught between competing loyalties."
    },
    {
        id: 7,
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        genre: "Sci-Fi",
        duration: "2h 16m",
        category: "top-rated",
        posterClass: "poster-matrix",
        tagline: "What is real?",
        description:
            "A computer programmer discovers that the reality he knows is an elaborate simulation and joins a rebellion against its creators."
    },
    {
        id: 8,
        title: "Gladiator",
        year: 2000,
        rating: 8.5,
        genre: "Action",
        duration: "2h 35m",
        category: "popular",
        posterClass: "poster-gladiator",
        tagline: "What we do in life echoes in eternity.",
        description:
            "A betrayed Roman general is forced into the gladiatorial arena and fights for justice, honor and revenge."
    },
    {
        id: 9,
        title: "Parasite",
        year: 2019,
        rating: 8.5,
        genre: "Drama",
        duration: "2h 12m",
        category: "trending",
        posterClass: "poster-parasite",
        tagline: "Everyone has a secret.",
        description:
            "A struggling family gradually becomes entangled with a wealthy household, leading to an unexpected collision of social worlds."
    },
    {
        id: 10,
        title: "The Prestige",
        year: 2006,
        rating: 8.5,
        genre: "Mystery",
        duration: "2h 10m",
        category: "top-rated",
        posterClass: "poster-prestige",
        tagline: "Are you watching closely?",
        description:
            "Two rival illusionists become obsessed with creating the ultimate stage trick, taking their rivalry to dangerous extremes."
    },
    {
        id: 11,
        title: "Blade Runner 2049",
        year: 2017,
        rating: 8.0,
        genre: "Sci-Fi",
        duration: "2h 44m",
        category: "trending",
        posterClass: "poster-blade",
        tagline: "The future has finally caught up.",
        description:
            "A young blade runner discovers a long-buried secret that leads him on a journey to uncover the truth about humanity."
    },
    {
        id: 12,
        title: "Whiplash",
        year: 2014,
        rating: 8.5,
        genre: "Drama",
        duration: "1h 47m",
        category: "top-rated",
        posterClass: "poster-whiplash",
        tagline: "There are no two words in the English language more harmful than good job.",
        description:
            "An ambitious young musician enters an intense relationship with an uncompromising instructor who demands extraordinary performance."
    },
    {
        id: 13,
        title: "Mad Max: Fury Road",
        year: 2015,
        rating: 8.1,
        genre: "Action",
        duration: "2h",
        category: "popular",
        posterClass: "poster-madmax",
        tagline: "What a lovely day.",
        description:
            "In a devastated future wasteland, a determined group attempts to escape a brutal ruler while fighting for freedom."
    },
    {
        id: 14,
        title: "Arrival",
        year: 2016,
        rating: 7.9,
        genre: "Sci-Fi",
        duration: "1h 56m",
        category: "trending",
        posterClass: "poster-arrival",
        tagline: "Why are they here?",
        description:
            "A linguist is recruited to communicate with mysterious visitors whose arrival challenges humanity's understanding of time and language."
    },
    {
        id: 15,
        title: "John Wick",
        year: 2014,
        rating: 7.4,
        genre: "Action",
        duration: "1h 41m",
        category: "popular",
        posterClass: "poster-wick",
        tagline: "Don't set him off.",
        description:
            "A retired assassin returns to his former life after a personal tragedy brings him into conflict with a dangerous criminal organization."
    },
    {
        id: 16,
        title: "Everything Everywhere",
        year: 2022,
        rating: 7.8,
        genre: "Adventure",
        duration: "2h 19m",
        category: "trending",
        posterClass: "poster-everything",
        tagline: "The universe is so much bigger than you realize.",
        description:
            "An ordinary woman is pulled into an extraordinary multiverse adventure where countless versions of her life collide."
    },
    {
        id: 17,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "Drama",
        duration: "2h 22m",
        category: "top-rated",
        posterClass: "poster-shawshank",
        tagline: "Hope can set you free.",
        description:
            "A banker sentenced to prison for a crime he claims not to have committed forms an enduring friendship and quietly holds onto hope."
    },
    {
        id: 18,
        title: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        rating: 8.4,
        genre: "Adventure",
        duration: "1h 57m",
        category: "popular",
        posterClass: "poster-spider",
        tagline: "Anyone can wear the mask.",
        description:
            "A teenager becomes Spider-Man and discovers that multiple versions of the hero exist across different dimensions."
    },
    {
        id: 19,
        title: "The Grand Budapest Hotel",
        year: 2014,
        rating: 8.1,
        genre: "Comedy",
        duration: "1h 39m",
        category: "popular",
        posterClass: "poster-budapest",
        tagline: "A priceless adventure.",
        description:
            "A legendary hotel concierge and his young protégé become involved in a mysterious inheritance dispute."
    },
    {
        id: 20,
        title: "Her",
        year: 2013,
        rating: 8.0,
        genre: "Romance",
        duration: "2h 6m",
        category: "popular",
        posterClass: "poster-her",
        tagline: "What makes us human?",
        description:
            "A lonely writer develops an unexpected relationship with an advanced operating system designed to understand and connect with people."
    },
    {
        id: 21,
        title: "Tenet",
        year: 2020,
        rating: 7.3,
        genre: "Action",
        duration: "2h 30m",
        category: "trending",
        posterClass: "poster-tenet",
        tagline: "Time runs in both directions.",
        description:
            "An operative enters a world of international espionage where the ability to manipulate the flow of time becomes the key to preventing catastrophe."
    },
    {
        id: 22,
        title: "The Martian",
        year: 2015,
        rating: 8.0,
        genre: "Adventure",
        duration: "2h 24m",
        category: "popular",
        posterClass: "poster-martian",
        tagline: "Bring him home.",
        description:
            "After being stranded on Mars, an astronaut must use science, engineering and determination to survive while Earth works to bring him home."
    },
    {
        id: 23,
        title: "La La Land",
        year: 2016,
        rating: 8.0,
        genre: "Romance",
        duration: "2h 8m",
        category: "popular",
        posterClass: "poster-lalaland",
        tagline: "Here's to the fools who dream.",
        description:
            "A musician and an aspiring actress fall in love while pursuing their creative ambitions in Los Angeles."
    },
    {
        id: 24,
        title: "No Country for Old Men",
        year: 2007,
        rating: 8.2,
        genre: "Thriller",
        duration: "2h 2m",
        category: "top-rated",
        posterClass: "poster-country",
        tagline: "There are no clean getaways.",
        description:
            "A hunter discovers a fortune from a drug deal gone wrong and becomes the target of a relentless killer."
    }
];