

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько его оцените?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--; //Вернуться на один цикл назад
            }
        }
    },
    detectPersonalLevel: function() {
        if ( personalMovieDB.count < 10 ) {
            console.log("Просмотрено давольно мало фильмов");
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
            console.log("Вы классический зритель");
        } else if ( personalMovieDB.count >= 30 ) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const a = prompt(`Ваш любимый жанр под номером ${i}`, '')

            if (a != null && a != '') {
                personalMovieDB.genres[i - 1] = a;
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((genre, index) => {
            console.log(`Любимый жанр ${index + 1} - это ${genre}`)
        })
    }
};