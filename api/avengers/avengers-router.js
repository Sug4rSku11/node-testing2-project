const express = require('express')
const Avenger = require('./avengers-model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Avenger.getAll(req.query)
    .then(avengers => {
        res.status(200).json(avengers)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res, next) => {
    res.end()
    
})
router.put('/:id',  async (req, res, next) => {
    Avenger.update(req.params.id, {name: req.name})
    .then(() => {
      return Avenger.getById(req.params.id)
    })
    .then(avengers => {
      res.json(avengers)
    })
    .then(avengers => {
        res.status(201).json(avengers)
    })
    .catch(next)
  });
router.post('/',async (req, res, next) => {
    Avenger.insert({name: req.name})
    .then(newAvenger =>{
        res.status(201).json(newAvenger)
    })
    .catch(next)
    })
    



module.exports = router