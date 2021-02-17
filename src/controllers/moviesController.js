const moviesCtrl = {};

const movie = require('../models/movies');

moviesCtrl.getMovies = async (req, res) => {
    const movies = await movie.find();
    res.json(movies)
}

moviesCtrl.saveMovies = async (req, res) => {
    const {name, director, clasification} = req.body;
    newMovie = new movie({
        name,
        director,
        clasification
    })
    await newMovie.save()
    res.json({message: 'movie saved'})
}

moviesCtrl.updateMovie = async (req, res) => {
    let id = req.params.id;
    const {name, director, clasification} = req.body
    await movie.findByIdAndUpdate(id, {
       name,
       director,
       clasification 
    })
    res.json({message: 'movie updated'})
}

moviesCtrl.deleteMovie = async (req, res) => {
    let id = req.params.id;
    await movie.findByIdAndDelete(id);
    res.json({message: 'movie deleted'})
}

module.exports = moviesCtrl;