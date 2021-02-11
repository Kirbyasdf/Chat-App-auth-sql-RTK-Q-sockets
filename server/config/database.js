require('dotenv').config({path: "./config/.env"})



const {DB_DATABASE, DB_HOST, DB_USER, DB_PASSWORD} = process.env



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

