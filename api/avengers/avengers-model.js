const db = require('../../data/db-config')

function getAll(){
    return db('avengers')
}

function getById(id) {
    return db('avengers')
            .where('id', id)
            .first()
}

function insert(avenger) {
    return db('avengers')
            .insert(avenger)
            .then(([id]) => {
                return getById(id)
            })
}

function update(id, changes) {
    return db('avengers')
            .where({ id })
            .update(changes)
            .then(rows => {
                return getById(id)
            })
}

function remove(id) {
    return db('avengers')
            .where('id', id)
            .delete()
}

module.exports = {
    getAll,
    getById,
    insert,
    update,
    remove,
}