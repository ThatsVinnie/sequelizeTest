require('dotenv').config({path:'./../variaveis.env'})
const Sequelize = require('sequelize')

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    dialect: 'mysql',
    host: DB_HOST,
    port: DB_PORT
})

module.exports = sequelize