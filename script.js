
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastWatchFilm = prompt('Один из последних просмотренных фильмов?', '');
const valueLastWatchFilm = prompt('На сколько его оцените?', '');



personalMovieDB.movies[lastWatchFilm] = valueLastWatchFilm;

console.log(personalMovieDB);