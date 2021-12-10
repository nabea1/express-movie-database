const { sequelize, DataTypes, Model } = require(".db");
const {Movie} = require('..')
class Crew extends Model{}

Crew.init{
    role_id: DataTypes.INTEGER
    name: DataTypes.STRING
} {
    sequelize, timestamps: false
}

module.exports = {Crew}