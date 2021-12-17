// Update with your config settings.
const common = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
}

module.exports = {
  development: {
    ...common,
    connection: {
      filename: './data/avengers_list',
    },
  },
  testing: {
    ...common,
    connection: {
      filename: './data/avengers_list',
    },
  },
  production: {

  },
};
