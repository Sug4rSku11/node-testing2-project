const Avenger = require('../avengers/avengers-model')
const db = require('../../data/db-config')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
  })
  beforeEach(async () => {
    await db.seed.run()
  })
  afterAll(async () => {
    await db.destroy() // disconnects from db
  })

  describe('Avengers Model', () => {
      describe('getAll', () => {
        let result
        beforeEach(async () => {
            result = await Avenger.getAll()
        })//beforeEach
        it('Can fetch all Avengers in the table', async () => {
            expect(result).toHaveLength(5)
        })//it
      })//getAll
      describe('getById', () => {
        it('Can fetch one Avenger from the table', async () => {
            const result = await Avenger.getById(4)
            expect(result).toMatchObject({ id: 4, name: 'Black Widow'})
        })//it
      })//getById
  })//1st describe