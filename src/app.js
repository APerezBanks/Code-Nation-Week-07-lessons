const yargs = require("yargs");
const Movie = require("./utils");

const app = (yargsObj) => {
    console.log(yargsObj)
    console.log(yargsObj.title)
    console.log(yargsObj.actor)

    if (yargsObj.add) {
        const movie = new Movie(yargsObj.title, yargsObj.actor);
        movie.add();
        console.log(movie.list());
    
    } else if (yargsObj.addNew) {

        const movie1 = new Movie (yargsObj.title, yargsObj.actor ); 
        const movie2 = new Movie (yargsObj.nothing, yargsObj.fish);    
            movie1.add();
            movie2.add();
            console.log(movie1.list());
          
        

        const allMovies = [movie1, movie2]
        // console.log(yargsObj.title)
        // console.log(yargsObj.actor)



        
    } else {
        
            console.log('Incorrect command')

    }
    };
    
app(yargs.argv);
