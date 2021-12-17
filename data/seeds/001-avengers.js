exports.seed = function(knex) {
    return knex('avengers')
    .truncate()
    .then(function() {
        return knex('avengers').insert([
            { name: 'Iron Man' },
            { name: 'Thor' },
            { name: 'Captain America' },
            { name: 'Black Widow' },
            { name: 'Hawkeye' },
        ])
    })
}