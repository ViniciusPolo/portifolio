const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const conexao = new Sequelize(dbConfig)
const languages = require('../api/models/LanguagesModel')
const users = require('../api/models/UsersModel')

try{
    conexao.authenticate();
    console.log('Conexão estabelecida!')
} catch (error) {
    console.log('Conexão não estabelecida =(')
}

languages.init(conexao)
users.init(conexao)

module.exports = conexao