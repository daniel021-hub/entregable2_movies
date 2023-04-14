const moviesDB = [
    {
        id :1,
        title: "The Super Mario Bros. Movie",
        description: "Mientras trabajan en una avería subterránea, los fontaneros de Brooklyn, Mario y su hermano Luigi, viajan por una misteriosa tubería hasta un nuevo mundo mágico. Pero, cuando los hermanos se separan, Mario deberá emprender una épica misión para encontrar a Luigi. Con la ayuda del champiñón local Toad y unas cuantas nociones de combate de la guerrera líder del Reino Champiñón, la princesa Peach, Mario descubre todo el poder que alberga en su interior.",
        year: 2023,
        director: "Aaron Horvath"
    }
]

// esta funcion  hace una busqueda total de todas las peliculas
let movieId = 2

const findAllMovies = async () => {
    return moviesDB
}

// esta funcion  hace la busqueda por Id de los libros
const findMovieById = async (id) => {
    const movie = moviesDB.find(movieItem => movieItem.id === id)
    return movie
}

// esta funcion crea un nuevo libro
const createMovie = async (movieObj) => {
    const newMovie = {
        id: movieId++,
        title: movieObj.title || 'Untitled',
        description: movieObj.description || 'Lorem Ipsum',
        year: movieObj.year || 'null',
        director: movieObj.director || 'Anonymous'
    }
    moviesDB.push(newMovie)
    return newMovie
}

module.exports = {
    findAllMovies,
    findMovieById,
    createMovie
}