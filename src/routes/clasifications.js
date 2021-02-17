const {Router} = require('express');
const router = Router();

const {saveClasification, updateClasification, deleteClasification, getClasification} = require('../controllers/clasificationController');

router.route('/')
    .get(getClasification)
    .post(saveClasification)

router.route('/:id')
    .put(updateClasification)
    .delete(deleteClasification)

module.exports = router