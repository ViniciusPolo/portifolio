const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const conexao = new Sequelize(dbConfig)
const languages = require('../api/models/languagesModel')

try{
    //conexao.authenthicate();
    console.log('Conexão estabelecida!')
} catch (error) {
    console.log('Conexão não estabelecida =(')
}

languages.init(conexao)

module.exports = conexao