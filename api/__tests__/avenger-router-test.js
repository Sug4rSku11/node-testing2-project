const request = require('supertest')
const server = require('../server')
const db = require('../../data/db-config')

beforeAll(async () =>{
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async () => {
    await db.seed.run()
})
afterAll(async () => {
    await db.destroy()
})

it('is the correct env', ()=> {
    expect(process.env.NODE_ENV).toBe('testing')
})

describe('Avengers router', ()=> {
    describe('[GET] api/avengers', ()=> {
        let res
        beforeEach(async ()=> {
            res = await request(server).get('/avengers')
        })//beforeEach
        it('Responds with 200 OK', async ()=> {
            expect(res.status).toBe(200)
        })//responds with 200
        it('Responds with all Avengers', async () => {
            expect(res.body).toHaveLength(5)
        })//responds with All avengers
    })
})//Avengers router