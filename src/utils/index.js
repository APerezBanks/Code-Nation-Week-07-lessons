const movieArr = [];

class Movie {
    constructor(title, actor = " You dont know who is in this ") {
    this.title = title;
    this.actor = actor;
}

add() {
    movieArr.push(this);
};

list() {
    return movieArr;
}

}
module.exports = Movie;