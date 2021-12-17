const express = require('express')
const Avenger = require('./avengers-model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Avenger.getAll(req.query)
    .then(avengers => {
        res.status(200).json(avengers)
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    Avenger.getById(req.params.id)
    .then(avenger => {
        if(avenger){
            res.status(200).json(avenger)
        } else {
            res.status(400).json({
                message: 'That avenger is not on the list'
            })
        }
    })
    .catch(next)
    
})
// router.put('/:id',  async (req, res, next) => {
//     Avenger.update(req.params.id, {name: req.name})
//     .then(() => {
//       return Avenger.getById(req.params.id)
//     })
//     .then(avengers => {
//       res.json(avengers)
//     })
//     .then(avengers => {
//         res.status(201).json(avengers)
//     })
//     .catch(next)
//   });
// router.post('/',async (req, res, next) => {
//     res
//     .status(201)
//     .json(await Avenger.insert(req.body))
//     })
    



module.exports = router