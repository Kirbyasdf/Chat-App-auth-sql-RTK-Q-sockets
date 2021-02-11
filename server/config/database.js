require('dotenv').config()



const {DB_DATABASE, DB_HOST, DB_USER, DB_PASSWORD} = process.env

console.log(DB_USER)
console.log(DB_PASSWORD)
console.log(DB_DATABASE)
console.log(DB_HOST)

module.exports={
  "development": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": "postgres"
  }
}

