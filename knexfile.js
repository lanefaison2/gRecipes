module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/grecipes'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
