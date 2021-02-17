const { Router } = require('express');
const router = Router();
const {getMovies, saveMovies, updateMovie, deleteMovie} = require('../controllers/moviesController')

router.route('/')
    .get(getMovies)
    .post(saveMovies)

router.route('/:id')
    .put(updateMovie)
    .delete(deleteMovie)

module.exports = router;