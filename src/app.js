const yargs = require("yargs");
const Movie = require("./utils");

const app = (yargsObj) => {
    if (yargsObj.add) {
        const movie = new Movie(yargsObj.title, yargsObj.actor);
        movie.add();
        console.log(movie.list());







      // add a movie to array, cosole log at the end of runtime ///
    //  } else if (yargsObj) {
    //     const movie1 = new Movie (yargsObj.tittle, yargsObj.actor);
    //     movie1.add();
    //     console.log(movie1.list()); 

    } else {

            console.log('Incorrect command')
    }
    };
    



app(yargs.argv);
