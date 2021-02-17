const clasificationCtrl = {}

const clasification = require('../models/clasifications');

clasificationCtrl.getClasification = async (req, res) => {
    const clasifications = await clasification.find();
    res.json(clasifications);
}

clasificationCtrl.saveClasification = async (req, res) => {
    const {name} = req.body;
    newClasification = new clasification({
        name
    })
    await newClasification.save();
    res.json({message: 'clasification saved'})
}

clasificationCtrl.updateClasification = async (req, res) => {
    let id = req.params.id;
    const {name} = req.body;
    await clasification.findByIdAndUpdate(id, {name});
    res.json({message: 'clasification updated'})
}

clasificationCtrl.deleteClasification = async (req, res) => {
    let id = req.params.id;
    await clasification.findByIdAndDelete(id)
    res.json({message: 'clasification deleted'})
}

module.exports = clasificationCtrl;