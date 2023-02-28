const { Model, DataTypes } = require('sequelize')

class Languages extends Model {
    static init(sequelize) {
        super.init({
            language: DataTypes.STRING,
            words: DataTypes.JSON
        }, {
            sequelize,
            tableName: "languages"
        })
        return this
    }

}
module.exports = Languages