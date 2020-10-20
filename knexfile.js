var db = (process.env.NODE_ENV === 'test') ? 'bookshelf_test' : 'bookshelf'

module.exports = {

  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: db,
    charset: 'utf8'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};